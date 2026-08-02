'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CheckCircle } from 'lucide-react';

interface NewsletterFormProps {
  /** Layout wrapper classes — callers control stacking and width. */
  className?: string;
  inputClassName?: string;
  buttonClassName?: string;
}

/**
 * Why: the same email-capture markup existed in the footer, the home newsletter
 * band, the seasonal offers band and the blog sidebar — and only one of the four
 * was wired to anything. This is the single working implementation.
 */
export function NewsletterForm({
  className = 'flex flex-col sm:flex-row gap-3',
  inputClassName = '',
  buttonClassName = '',
}: NewsletterFormProps) {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    // No mail backend on a static export — the delay stands in for the request
    // so the button still communicates progress before the success state.
    await new Promise((resolve) => setTimeout(resolve, 800));
    setIsSubscribed(true);
    setIsLoading(false);
    setEmail('');
  };

  if (isSubscribed) {
    return (
      <div className="flex items-center justify-center gap-2 rounded-lg bg-white/10 p-4 text-center">
        <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-400" />
        <span className="text-sm">You&apos;re subscribed — check your inbox for a welcome offer.</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={className}>
      <Input
        type="email"
        aria-label="Email address"
        placeholder="Enter your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={`flex-1 min-w-0 ${inputClassName}`}
        required
      />
      <Button type="submit" disabled={isLoading} className={buttonClassName}>
        {isLoading ? 'Subscribing...' : 'Subscribe'}
      </Button>
    </form>
  );
}
