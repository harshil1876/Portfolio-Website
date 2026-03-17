"use client";

import { Download, ExternalLink, FileText } from "lucide-react";
import { motion } from "framer-motion";

interface PDFViewerProps {
  url: string;
  title: string;
}

export function PDFViewer({ url, title }: PDFViewerProps) {
  // Use a reliable PDF viewing strategy: iframe or object
  // Most modern browsers handle this well.
  
  return (
    <div className="flex flex-col gap-4 w-full h-full">
      <div className="flex items-center justify-between p-4 bg-muted/30 border border-border rounded-xl">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-lg text-primary">
            <FileText size={20} />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground truncate max-w-[200px] sm:max-w-xs">
              {title}
            </h3>
            <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-medium">Digital Certificate</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
           <a 
            href={url} 
            download 
            className="p-2 rounded-lg bg-background border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all shadow-sm"
            title="Download PDF"
          >
            <Download size={18} />
          </a>
          <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-background border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all shadow-sm"
            title="Open in New Tab"
          >
            <ExternalLink size={18} />
          </a>
        </div>
      </div>

      <div className="relative w-full aspect-[1.414/1] rounded-2xl overflow-hidden border border-border bg-card shadow-inner group">
        <iframe
          src={`${url}#toolbar=0&view=Fit`}
          className="w-full h-full border-none rounded-xl"
          title={title}
        />
        
        {/* Mobile Fallback Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-background/90 backdrop-blur-sm md:hidden pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="text-center p-6">
                <FileText size={48} className="mx-auto text-primary mb-4" />
                <p className="text-sm font-medium">Tap the icons above to view or download the certificate</p>
            </div>
        </div>
      </div>
    </div>
  );
}
