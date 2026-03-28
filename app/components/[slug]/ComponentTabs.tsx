'use client';
import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Check, Copy } from 'lucide-react';

export default function ComponentTabs({ preview, code }: { preview: React.ReactNode, code: string }) {
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <div className="flex items-center gap-6">
          <button
            onClick={() => setActiveTab('preview')}
            className={`text-sm font-medium transition-colors relative ${
              activeTab === 'preview' ? 'text-white' : 'text-white/50 hover:text-white/80'
            }`}
          >
            Preview
            {activeTab === 'preview' && (
              <span className="absolute -bottom-[17px] left-0 right-0 h-0.5 bg-white rounded-t-full" />
            )}
          </button>
          <button
            onClick={() => setActiveTab('code')}
            className={`text-sm font-medium transition-colors relative ${
              activeTab === 'code' ? 'text-white' : 'text-white/50 hover:text-white/80'
            }`}
          >
            Code
            {activeTab === 'code' && (
              <span className="absolute -bottom-[17px] left-0 right-0 h-0.5 bg-white rounded-t-full" />
            )}
          </button>
        </div>
        
        {activeTab === 'code' && (
          <button 
            onClick={handleCopy}
            className="flex items-center gap-2 text-xs font-medium text-white/50 hover:text-white transition-colors bg-white/5 px-3 py-1.5 rounded-md"
          >
            {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            {copied ? 'Copied!' : 'Copy Code'}
          </button>
        )}
      </div>

      <div className="mt-4">
        {activeTab === 'preview' ? (
          <div className="w-full rounded-2xl border border-white/10 bg-black/20 overflow-hidden relative" style={{ minHeight: '400px' }}>
            {/* Dot pattern background for preview */}
            <div className="absolute inset-0 pointer-events-none opacity-20" 
                 style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} />
            <div className="relative z-10 w-full h-full flex items-center justify-center">
              {preview}
            </div>
          </div>
        ) : (
          <div className="w-full rounded-2xl border border-white/10 overflow-hidden bg-[#1E1E1E]">
            <SyntaxHighlighter
              language="tsx"
              style={vscDarkPlus}
              customStyle={{
                margin: 0,
                padding: '1.5rem',
                fontSize: '0.875rem',
                lineHeight: '1.5',
                background: 'transparent',
              }}
              wrapLines={true}
            >
              {code}
            </SyntaxHighlighter>
          </div>
        )}
      </div>
    </div>
  );
}
