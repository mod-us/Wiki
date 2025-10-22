// Benchmark data service for querying sales metrics
export interface BenchmarkData {
  id: string;
  source_name: string;
  source_url: string;
  company_size: string;
  company_industry: string;
  company_stage: string;
  role_title: string;
  role_segment: string;
  role_region: string;
  metric_name: string;
  metric_category: string;
  metric_description: string;
  value_type: string;
  value: string | number;
  value_unit_type: string;
  value_unit: string;
  notes: string;
  metadata: string;
  created_at: string;
}

let benchmarkCache: BenchmarkData[] | null = null;

export async function loadBenchmarkData(): Promise<BenchmarkData[]> {
  if (benchmarkCache) {
    return benchmarkCache;
  }

  try {
    const response = await fetch('/sales-wiki/iconiq-prod.csv');

    if (!response.ok) {
      console.error('Failed to fetch CSV:', response.status, response.statusText);
      return [];
    }

    const text = await response.text();
    const lines = text.split('\n');
    const headers = parseCSVLine(lines[0]);

    benchmarkCache = lines.slice(1)
      .filter(line => line.trim())
      .map(line => {
        const values = parseCSVLine(line);
        const obj: any = {};
        headers.forEach((header, index) => {
          obj[header.trim()] = values[index]?.trim() || '';
        });
        return obj as BenchmarkData;
      });

    console.log('Loaded benchmark data:', benchmarkCache.length, 'records');
    console.log('Sample record:', benchmarkCache[0]);

    return benchmarkCache;
  } catch (error) {
    console.error('Error loading benchmark data:', error);
    return [];
  }
}

// Parse CSV line handling quoted values
function parseCSVLine(line: string): string[] {
  const result: string[] = [];
  let current = '';
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];

    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === ',' && !inQuotes) {
      result.push(current);
      current = '';
    } else {
      current += char;
    }
  }

  result.push(current);
  return result;
}

export function queryBenchmarks(query: string, data: BenchmarkData[]): BenchmarkData[] {
  const lowerQuery = query.toLowerCase();

  // Extract meaningful keywords (remove common words)
  const stopWords = ['what', 'is', 'the', 'a', 'an', 'for', 'in', 'on', 'at', 'to', 'of', 'and', 'or', 'how', 'do', 'does', 'can', 'should', 'would', 'my', 'me', 'i', 'you', 'show', 'find', 'get', 'about', 'tell'];
  const keywords = lowerQuery
    .split(/\s+/)
    .filter(word => word.length > 2 && !stopWords.includes(word));

  console.log('Search keywords:', keywords);

  // Score each item based on keyword matches
  const scoredResults = data.map(item => {
    let score = 0;
    const searchableText = [
      item.role_title,
      item.metric_name,
      item.metric_description,
      item.role_segment,
      item.notes,
      item.metric_category
    ].join(' ').toLowerCase();

    keywords.forEach(keyword => {
      if (searchableText.includes(keyword)) {
        score += 1;
        // Boost score for exact matches in important fields
        if (item.metric_name?.toLowerCase().includes(keyword)) score += 2;
        if (item.role_title?.toLowerCase().includes(keyword)) score += 1;
      }
    });

    return { item, score };
  });

  // Return items with score > 0, sorted by score
  return scoredResults
    .filter(result => result.score > 0)
    .sort((a, b) => b.score - a.score)
    .map(result => result.item);
}

export function formatBenchmarkValue(item: BenchmarkData): string {
  const value = item.value;
  const unit = item.value_unit;

  if (item.value_unit_type === 'money') {
    if (typeof value === 'number' || !isNaN(Number(value))) {
      return `$${Number(value).toLocaleString()}`;
    }
    return String(value);
  }

  if (item.value_unit_type === 'percent') {
    return `${value}${unit}`;
  }

  if (item.value_unit_type === 'ratio') {
    return `${value}${unit}`;
  }

  if (item.value_unit_type === 'duration') {
    return `${value} ${unit}`;
  }

  return String(value);
}

export function getBenchmarksByRole(data: BenchmarkData[], role: string): BenchmarkData[] {
  return data.filter(item =>
    item.role_title?.toLowerCase() === role.toLowerCase()
  );
}

export function getBenchmarksByMetric(data: BenchmarkData[], metric: string): BenchmarkData[] {
  return data.filter(item =>
    item.metric_name?.toLowerCase().includes(metric.toLowerCase())
  );
}

export function getBenchmarksBySegment(data: BenchmarkData[], segment: string): BenchmarkData[] {
  return data.filter(item =>
    item.role_segment?.toLowerCase() === segment.toLowerCase()
  );
}
