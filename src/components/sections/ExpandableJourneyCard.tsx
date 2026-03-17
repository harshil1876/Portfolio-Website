"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface ExpandableJourneyCardProps {
  id: string;
  triggerCard: React.ReactNode;
  expandedContent: React.ReactNode;
  className?: string;
  expandedClassName?: string;
}

export function ExpandableJourneyCard({
  id,
  triggerCard,
  expandedContent,
  className = "",
  expandedClassName = "",
}: ExpandableJourneyCardProps) {
  const [step, setStep] = useState<0 | 1 | 2 | 3>(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (step === 3) {
      const timer = setTimeout(() => {
        setStep(1); // switch back to the 'back' card before flipping
        setTimeout(() => setStep(0), 50); // then start flip to front
      }, 400); 
      return () => clearTimeout(timer);
    }
  }, [step]);

  return (
    <>
      <div className={`relative perspective-[1500px] ${className}`}>
        {step !== 2 && (
          <motion.div
            layoutId={`journey-${id}`}
            className="w-full h-full cursor-pointer"
            onClick={() => {
              if (step === 0) setStep(1);
            }}
            style={{ borderRadius: "24px", transformStyle: "preserve-3d" }}
          >
            <motion.div
              className="w-full h-full relative"
              initial={false}
              animate={{ rotateY: step === 0 ? 0 : 180 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              onAnimationComplete={() => {
                if (step === 1) {
                  setStep(2); // Expand!
                }
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Front Side */}
              <div 
                className="w-full h-full absolute inset-0"
                style={{ backfaceVisibility: "hidden" }}
              >
                {triggerCard}
              </div>
              
              {/* Back Side */}
              <div 
                className="w-full h-full absolute inset-0 bg-secondary rounded-[24px] border border-border"
                style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
              />
            </motion.div>
          </motion.div>
        )}
      </div>

      {isMounted && createPortal(
        <AnimatePresence>
          {step === 2 && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={(e) => {
                  e.stopPropagation();
                  setStep(3);
                }}
                className="fixed inset-0 z-[9998] bg-background/80 backdrop-blur-sm pointer-events-auto"
              />

              {/* Modal Container */}
              <div 
                className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8 pointer-events-none"
                onPointerDown={(e) => e.stopPropagation()}
              >
                <motion.div
                  layoutId={`journey-${id}`}
                  className={`relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-card rounded-3xl border border-border bg-gradient-to-br from-card to-secondary/50 shadow-2xl pointer-events-auto flex flex-col ${expandedClassName}`}
                  style={{ borderRadius: "24px" }}
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Close Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setStep(3);
                    }}
                    className="absolute top-4 right-4 z-10 rounded-full p-2 bg-background/50 hover:bg-background border border-border/50 text-muted-foreground hover:text-foreground backdrop-blur-md transition-colors"
                  >
                    <X size={20} />
                  </button>

                  {/* Main Content */}
                  <div className="p-6 md:p-10">
                    {expandedContent}
                  </div>
                </motion.div>
              </div>
            </>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}
