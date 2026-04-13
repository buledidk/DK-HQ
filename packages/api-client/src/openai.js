/**
 * OpenAI API Client
 * Document analysis and content generation
 */

const BASE_URL = 'https://api.openai.com/v1';
const DEFAULT_MODEL = 'gpt-4o';

export class OpenAIClient {
  constructor(apiKey) {
    if (!apiKey) throw new Error('OpenAI API key is required');
    this.apiKey = apiKey;
  }

  async chat({ model = DEFAULT_MODEL, messages, maxTokens = 4096 }) {
    const response = await fetch(`${BASE_URL}/chat/completions`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model,
        messages,
        max_tokens: maxTokens,
      }),
    });
    if (!response.ok) {
      const error = await response.text();
      throw new Error(`OpenAI API error: ${response.status} - ${error}`);
    }
    return response.json();
  }
}
