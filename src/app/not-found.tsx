"use client";

import { motion } from "framer-motion";
import { Home, ArrowLeft, Search } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="mx-auto max-w-md px-4 text-center">
        {/* Animated 404 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="relative"
        >
          <h1 className="text-[8rem] font-bold leading-none tracking-tighter sm:text-[10rem]">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              4
            </span>
            <motion.span
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="inline-block bg-gradient-to-r from-accent to-purple-500 bg-clip-text text-transparent"
            >
              0
            </motion.span>
            <span className="bg-gradient-to-r from-purple-500 to-primary bg-clip-text text-transparent">
              4
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="mt-4 text-xl font-bold text-foreground">
            Page not found
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Looks like this page doesn&apos;t exist or has been moved. Let me help
            you find your way back.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:-translate-y-0.5"
            >
              <Home size={16} /> Go Home
            </Link>
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-all hover:border-primary hover:-translate-y-0.5"
            >
              <Search size={16} /> Browse Projects
            </Link>
          </div>

          <button
            onClick={() => window.history.back()}
            className="mt-4 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft size={14} /> Go back
          </button>
        </motion.div>
      </div>
    </div>
  );
}
