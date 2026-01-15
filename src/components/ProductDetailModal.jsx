import React, { useState } from 'react';
import { X, Copy, Check, Tag } from 'lucide-react';
import toast from 'react-hot-toast';

const ProductDetailModal = ({ product, onClose }) => {
  const [copiedId, setCopiedId] = useState(null);

  const handleCopy = async (text, id) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      toast.success('Copied to clipboard!', {
        duration: 2000,
        position: 'bottom-center',
        style: {
          background: '#0084FF',
          color: '#fff',
          borderRadius: '12px',
          padding: '12px 24px',
          fontSize: '16px',
          fontWeight: '600',
        },
      });

      setTimeout(() => {
        setCopiedId(null);
      }, 2000);
    } catch (err) {
      toast.error('Failed to copy');
    }
  };

  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white w-full md:max-w-3xl md:mx-4 rounded-t-3xl md:rounded-3xl shadow-2xl max-h-[90vh] overflow-hidden flex flex-col animate-slide-up">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary to-accent-tech p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors"
          >
            <X size={24} />
          </button>

          <div className="pr-12">
            <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
            <div className="flex items-center gap-2 text-white/90">
              <Tag size={18} />
              <span className="text-lg font-semibold">{product.price}</span>
            </div>
          </div>
        </div>

        {/* Scripts List */}
        <div className="overflow-y-auto flex-1 p-4 md:p-6">
          <h3 className="text-lg font-bold text-secondary mb-4">Reply Scripts</h3>

          <div className="space-y-4">
            {product.scripts.map((script, index) => {
              const scriptId = `${product.id}-${index}`;
              const isCopied = copiedId === scriptId;

              return (
                <div
                  key={index}
                  className="bg-surface rounded-xl p-4 md:p-5 border-2 border-transparent hover:border-primary/30 transition-all"
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h4 className="font-semibold text-secondary text-base md:text-lg flex-1">
                      {script.question}
                    </h4>
                    <button
                      onClick={() => handleCopy(script.answer, scriptId)}
                      className={`flex-shrink-0 px-4 py-2 md:px-6 md:py-3 rounded-lg font-semibold transition-all transform active:scale-95 flex items-center gap-2 text-sm md:text-base ${
                        isCopied
                          ? 'bg-green-500 text-white'
                          : 'bg-primary text-white hover:bg-primary/90'
                      }`}
                    >
                      {isCopied ? (
                        <>
                          <Check size={20} />
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy size={20} />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="text-secondary/80 whitespace-pre-line text-sm md:text-base leading-relaxed">
                    {script.answer}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 p-4 bg-white">
          <button
            onClick={onClose}
            className="w-full py-3 md:py-4 bg-secondary text-white rounded-xl font-semibold text-base md:text-lg hover:bg-secondary/90 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailModal;

