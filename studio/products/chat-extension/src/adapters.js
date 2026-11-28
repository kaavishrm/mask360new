// One adapter per chat site. Each knows the hostnames it serves and the shape of a conversation link.
// The content script picks an adapter by hostname, or, when the host is unknown (saved fixtures, mirrors),
// by whichever pattern matches the most links on the page. No CSS classes are used anywhere, because the
// sites change those often; URL shapes change rarely.
window.ConversationShelfAdapters = [
  { id: 'chatgpt', name: 'ChatGPT', hosts: ['chatgpt.com', 'chat.openai.com'], href: /^(?:https?:\/\/[^/]+)?\/c\/([A-Za-z0-9-]+)(?:[/?#]|$)/ },
  { id: 'claude', name: 'Claude', hosts: ['claude.ai'], href: /^(?:https?:\/\/[^/]+)?\/chat\/([A-Za-z0-9-]+)(?:[/?#]|$)/ },
  { id: 'gemini', name: 'Gemini', hosts: ['gemini.google.com'], href: /^(?:https?:\/\/[^/]+)?\/app\/([A-Za-z0-9]+)(?:[/?#]|$)/ },
];
