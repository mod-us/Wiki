import { useState, useEffect, useRef } from 'react';
import Layout from '@theme/Layout';
import { loadBenchmarkData, queryBenchmarks, formatBenchmarkValue, BenchmarkData } from '../utils/benchmarkData';

interface Message {
  id: string;
  type: 'agent' | 'user';
  content: string;
  status?: 'typing' | 'complete';
  tasks?: { text: string; completed: boolean }[];
  results?: BenchmarkData[];
}

export default function BenchmarkQA() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'agent',
      content: 'Hi! I can help you find sales benchmarks from our database. Ask me about compensation, quotas, ramp times, or any other sales metrics.',
      status: 'complete'
    }
  ]);
  const [input, setInput] = useState('');
  const [benchmarkData, setBenchmarkData] = useState<BenchmarkData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    loadBenchmarkData().then(data => setBenchmarkData(data));

    // Check for query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const question = urlParams.get('q');
    if (question) {
      setTimeout(() => handleSend(question), 500);
    }
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleQuickReply = (reply: string) => {
    handleSend(reply);
  };

  const handleSend = async (text?: string) => {
    const messageText = text || input;
    if (!messageText.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: messageText,
      status: 'complete'
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Simulate agent thinking
    const agentMessageId = (Date.now() + 1).toString();
    const agentMessage: Message = {
      id: agentMessageId,
      type: 'agent',
      content: 'Let me search the benchmark data for you...',
      status: 'typing',
      tasks: [
        { text: 'Searching benchmark database', completed: false },
        { text: 'Analyzing relevant metrics', completed: false },
        { text: 'Preparing results', completed: false }
      ]
    };

    setMessages(prev => [...prev, agentMessage]);

    // Simulate progressive task completion
    await new Promise(resolve => setTimeout(resolve, 800));
    setMessages(prev =>
      prev.map(msg =>
        msg.id === agentMessageId
          ? {
              ...msg,
              tasks: msg.tasks?.map((task, i) => (i === 0 ? { ...task, completed: true } : task))
            }
          : msg
      )
    );

    await new Promise(resolve => setTimeout(resolve, 800));
    setMessages(prev =>
      prev.map(msg =>
        msg.id === agentMessageId
          ? {
              ...msg,
              tasks: msg.tasks?.map((task, i) => (i <= 1 ? { ...task, completed: true } : task))
            }
          : msg
      )
    );

    await new Promise(resolve => setTimeout(resolve, 800));

    // Search benchmarks
    const results = queryBenchmarks(messageText, benchmarkData);

    console.log('Search query:', messageText);
    console.log('Total benchmark records:', benchmarkData.length);
    console.log('Search results found:', results.length);

    const responseContent = generateResponse(messageText, results);

    // Update agent message with results
    setMessages(prev =>
      prev.map(msg =>
        msg.id === agentMessageId
          ? {
              ...msg,
              content: responseContent,
              status: 'complete',
              tasks: msg.tasks?.map(task => ({ ...task, completed: true })),
              results: results.length > 0 ? results.slice(0, 5) : undefined // Top 5 results
            }
          : msg
      )
    );

    setIsLoading(false);
  };

  const generateResponse = (query: string, results: BenchmarkData[]): string => {
    const lowerQuery = query.toLowerCase();

    if (results.length === 0) {
      return `I couldn't find specific benchmark data for "${query}". Try asking about:\n• OTE or compensation\n• Quota or quota ratios\n• Ramp time\n• Commission rates\n• Specific roles like "Account Executive" or "SDR"`;
    }

    // Generate contextual response based on query
    if (lowerQuery.includes('ote') || lowerQuery.includes('compensation') || lowerQuery.includes('salary')) {
      const avgOTE = results.find(r => r.metric_name === 'On-Target Earnings (OTE)');
      if (avgOTE) {
        return `Found ${results.length} compensation benchmark${results.length > 1 ? 's' : ''}. Here's what the data shows:`;
      }
    }

    if (lowerQuery.includes('quota')) {
      const quotaMetric = results.find(r => r.metric_name.includes('Quota'));
      if (quotaMetric) {
        return `Found ${results.length} quota-related benchmark${results.length > 1 ? 's' : ''}. Here are the key metrics:`;
      }
    }

    if (lowerQuery.includes('ramp')) {
      const rampMetric = results.find(r => r.metric_name === 'Ramp Time');
      if (rampMetric) {
        return `Found ${results.length} ramp time benchmark${results.length > 1 ? 's' : ''}. Here's what the data shows:`;
      }
    }

    return `I found ${results.length} relevant benchmark${results.length > 1 ? 's' : ''} from our database:`;
  };

  return (
    <Layout title="Benchmark Q&A" description="Ask questions about sales benchmarks">
      <div className="benchmark-qa-container">
        {/* Chat Area */}
        <div className="qa-chat-area">
          <div className="qa-messages">
            {messages.map((message) => (
              <div key={message.id} className={`qa-message qa-message-${message.type}`}>
                <div className="qa-message-header">
                  <div className="qa-avatar">
                    {message.type === 'agent' && (
                      <img src="/sales-wiki/img/Modus Logo Final.png" alt="Agent" />
                    )}
                  </div>
                  <div className="qa-sender-name">
                    {message.type === 'agent' ? 'Modus Agent' : 'You'}
                  </div>
                </div>

                <div className="qa-message-content">
                  <p>{message.content}</p>

                  {message.tasks && (
                    <div className="qa-tasks">
                      {message.tasks.map((task, index) => (
                        <div key={index} className={`qa-task ${task.completed ? 'completed' : ''}`}>
                          {task.completed ? (
                            <svg className="qa-task-icon" viewBox="0 0 16 16" fill="none">
                              <path d="M13.5 4L6 11.5L2.5 8" stroke="currentColor" strokeWidth="2" />
                            </svg>
                          ) : (
                            <div className="qa-task-spinner" />
                          )}
                          <span className="qa-task-text">{task.text}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {message.results && message.results.length > 0 && (
                    <div className="qa-results">
                      <h4>Top Results:</h4>
                      {message.results.map((result, index) => (
                        <div key={index} className="qa-result-card">
                          <div className="qa-result-header">
                            <span className="qa-result-badge">{result.metric_category}</span>
                            <h5>{result.metric_name}</h5>
                          </div>
                          <div className="qa-result-details">
                            <p><strong>Role:</strong> {result.role_title}</p>
                            <p><strong>Segment:</strong> {result.role_segment}</p>
                            <p><strong>Value:</strong> {formatBenchmarkValue(result)}</p>
                            {result.notes && <p className="qa-result-notes">{result.notes}</p>}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="qa-input-container">
            <div className="qa-input-box">
              <img src="/sales-wiki/img/Modus Logo Final.png" alt="Agent" className="qa-input-avatar" />
              <input
                type="text"
                placeholder="Ask about benchmarks... e.g., 'What's the average AE ramp time?'"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                className="qa-input"
                disabled={isLoading}
              />
              <button
                onClick={() => handleSend()}
                disabled={!input.trim() || isLoading}
                className="qa-send-button"
              >
                <svg viewBox="0 0 20 20" fill="none" stroke="currentColor">
                  <path d="M10 4l6 6-6 6M16 10H4" strokeWidth="2" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
