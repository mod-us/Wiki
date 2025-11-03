const fs = require('fs');
const path = require('path');

// Function to recursively get all .md files
function getAllMarkdownFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('_')) {
      getAllMarkdownFiles(filePath, fileList);
    } else if (file.endsWith('.md') && !file.startsWith('_') && file !== 'index.md') {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// Function to extract title and description from markdown content
function extractFrontmatter(content) {
  // Simple regex to extract frontmatter between --- markers
  const frontmatterMatch = content.match(/^---\s*\n([\s\S]*?)\n---/);
  
  if (!frontmatterMatch) return { title: '', description: '' };
  
  const frontmatter = frontmatterMatch[1];
  const titleMatch = frontmatter.match(/title:\s*["']?(.*?)["']?\s*(\n|$)/);
  const descriptionMatch = frontmatter.match(/description:\s*["']?(.*?)["']?\s*(\n|$)/);
  
  return {
    title: titleMatch ? titleMatch[1] : '',
    description: descriptionMatch ? descriptionMatch[1] : ''
  };
}

// Function to determine category based on file path
function getCategoryFromPath(filePath) {
  const parts = filePath.split(path.sep);
  // Look for category folders like metrics, capacity, playbooks
  for (const part of parts) {
    if (['metrics', 'capacity', 'foundations', 'playbooks'].includes(part)) {
      return part.charAt(0).toUpperCase() + part.slice(1);
    }
  }
  return 'Other';
}

// Function to extract definition from the content
function extractDefinition(content) {
  // Remove frontmatter
  const contentWithoutFrontmatter = content.replace(/^---\s*\n[\s\S]*?\n---/, '');
  
  // Try to find the Definition section
  const definitionMatch = contentWithoutFrontmatter.match(/##?\s+Definition\s*\n\s*([\s\S]*?)(?=\n##|$)/i);
  if (definitionMatch && definitionMatch[1].trim()) {
    // Clean up the definition text
    return definitionMatch[1]
      .replace(/\*\*/g, '')  // Remove bold
      .replace(/\*/g, '')    // Remove italic
      .replace(/`/g, '')     // Remove code
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Replace links with just text
      .replace(/\n+/g, ' ')  // Replace newlines with spaces
      .trim();
  }
  
  // If no Definition section, look for the first paragraph after the title
  const firstParagraphMatch = contentWithoutFrontmatter
    .replace(/^#\s+.*?\n/, '') // Remove the title
    .match(/^\s*([^\n#]+)/);   // Get first paragraph
    
  if (firstParagraphMatch && firstParagraphMatch[1].trim()) {
    return firstParagraphMatch[1]
      .replace(/\*\*/g, '')  // Remove bold
      .replace(/\*/g, '')    // Remove italic
      .replace(/`/g, '')     // Remove code
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Replace links with just text
      .trim();
  }
  
  // If all else fails, just get the first non-empty line after frontmatter
  const firstLine = contentWithoutFrontmatter
    .split('\n')
    .map(line => line.trim())
    .filter(line => line && !line.startsWith('#'))[0] || '';
    
  return firstLine;
}

// Function to create a concise description (one short sentence)
function createConciseDescription(text, maxLength = 80) {
  if (!text) return '';
  
  // Extract first sentence if possible
  const sentenceMatch = text.match(/^([^.!?]+[.!?])/);
  let sentence = sentenceMatch ? sentenceMatch[1].trim() : text;
  
  // Truncate if still too long
  if (sentence.length > maxLength) {
    // Find a good breaking point
    const lastSpace = sentence.substring(0, maxLength).lastIndexOf(' ');
    if (lastSpace > maxLength * 0.7) {
      sentence = sentence.substring(0, lastSpace) + '.';
    } else {
      sentence = sentence.substring(0, maxLength) + '...';
    }
  }
  
  return sentence;
}

// Predefined concise descriptions for popular terms
const predefinedDescriptions = {
  'RRE (Ramped Rep Equivalent)': 'Convert partially ramped reps into fully ramped equivalents for clean capacity math.',
  'Recovered Gap': 'Portion of lost capacity regained via backfills, transfers, or ramp within the window.',
  'Unrecovered Gap': 'Lost capacity not recovered within the measurement window (in $ or RRE).',
  'Sales Efficiency Ratio': 'Revenue growth per dollar of S&M spend. Spell out the exact variant used.',
  'Territory Planning Basics': 'Balance potential, ramp, and role mix. Revisit quarterly. Document diffs.',
  'Attrition Rate': 'Percentage of reps who leave within a given period. Track voluntary vs involuntary.',
  'Capacity Waterfall': 'Visual flow of sales capacity from beginning to end of quarter, showing gains and losses.',
  'Current Capacity': 'Total selling power available right now, measured in dollars or RRE.',
  'Gap to Target': 'Difference between your target capacity and current capacity.',
  'Loss Capacity': 'Total selling power lost to attrition and transfers in a period.',
  'Backfill Rate': 'Percentage of lost capacity recovered through backfill hires in a period.',
  'Capacity at Risk': 'Estimated sales capacity likely to be lost to attrition in coming period.',
  'Productivity Metrics': 'Measures of individual and team output relative to capacity.',
  'Quarterly Quota': 'Revenue target assigned to a sales rep for a single quarter.',
  'Recovery Lag': 'Average time between when an employee leaves and replacement reaches same level.',
  'Time to Backfill': 'Average days between employee departure and backfill start date.',
  'Headcount vs Capacity': 'Headcount counts people; capacity measures productive selling power.',
  'Ramp Curves': 'Model showing how new hire productivity increases from 0% to 100% over time.',
  'What is Capacity Planning': 'Process of forecasting and managing sales team selling capacity.',
  'Attrition Management': 'Process to track, analyze, and respond to employee departures.',
  'Backfill Planning': 'Process of replacing departed sales employees to restore lost capacity.',
  'Capacity Planning': 'Forecasting capacity needs and managing the gap between target and actual.',
  'Hiring Planning': 'Determining when and how many sales hires needed to meet capacity targets.',
  'Leave Management': 'Process for handling employee absences and minimizing capacity impact.',
  'Quota Setting': 'Assigning revenue targets to reps based on capacity and market potential.'
};

// Get all markdown files
const docsDir = path.join(__dirname, '../docs');
const markdownFiles = getAllMarkdownFiles(docsDir);

// Extract frontmatter and create glossary entries
const glossaryTerms = markdownFiles.map(filePath => {
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { title, description } = extractFrontmatter(fileContent);
  const relativePath = filePath.replace(docsDir, '').replace(/\.md$/, '');
  const fileName = path.basename(filePath, '.md');
  
  // Use extracted title or fallback to filename
  const termTitle = title || fileName.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');
  
  // Use predefined description if available, otherwise create a concise one
  let termDesc;
  if (predefinedDescriptions[termTitle]) {
    termDesc = predefinedDescriptions[termTitle];
  } else {
    // Extract a description from the content and make it concise
    const extractedDesc = description || extractDefinition(fileContent);
    termDesc = createConciseDescription(extractedDesc);
    
    // If we couldn't get a good description, use a generic one based on the title
    if (!termDesc || termDesc === termTitle) {
      termDesc = `${termTitle} metric for sales capacity planning.`;
    }
  }
  
  return {
    title: termTitle,
    desc: termDesc,
    pill: getCategoryFromPath(filePath),
    link: `/docs${relativePath.replace(/\\/g, '/')}`
  };
});

// Create directory if it doesn't exist
const dataDir = path.join(__dirname, '../src/data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// Write to JSON file
fs.writeFileSync(
  path.join(dataDir, 'glossaryTerms.json'),
  JSON.stringify(glossaryTerms, null, 2)
);

console.log(`Generated glossary index with ${glossaryTerms.length} terms`);