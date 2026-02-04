'use client'

import { useState } from 'react'
import { Copy, Check } from 'lucide-react'

export function ContractBox() {
  const [copied, setCopied] = useState(false)
  const contractAddress = '123456789pump'

  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="bg-gradient-to-r from-red-950/50 to-red-900/50 border-2 border-red-600 rounded-2xl p-4 md:p-6 backdrop-blur-sm hover:border-red-500 transition-all duration-300">
      <div className="text-red-500 text-sm mb-2 uppercase tracking-widest font-bold">
        Contract Address
      </div>
      <div className="flex items-center justify-between gap-3">
        <code className="text-red-400 font-mono text-sm md:text-base flex-1 break-all font-bold">
          {contractAddress}
        </code>
        <button
          onClick={handleCopy}
          className="flex-shrink-0 bg-red-600 hover:bg-red-700 text-white p-2 md:p-3 rounded-lg transition-all duration-200 hover:scale-110"
          title="Copy to clipboard"
        >
          {copied ? (
            <Check size={20} className="text-green-300" />
          ) : (
            <Copy size={20} />
          )}
        </button>
      </div>
    </div>
  )
}
