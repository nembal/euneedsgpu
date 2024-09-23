import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background text-foreground py-8 mt-16 border-t border-border">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="bearmetal-hover">
          <Link href="https://www.bearmetal.co/" className="text-xl font-bold">
            <span className="bearmetal-text">Bearmetal</span>
            <span className="bearmetal-emoji" aria-hidden="true">🧸🤘</span>
          </Link>
        </div>
        <div className="text-center">
          <p className="text-sm text-muted-foreground">Made in EU</p>
        </div>
        <div className="w-[100px]"></div> {/* Spacer for alignment */}
      </div>
    </footer>
  );
};

export default Footer;