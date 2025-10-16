'use client';

import { motion, type HTMLMotionProps } from 'framer-motion';
import React from 'react';

type Props = HTMLMotionProps<'button'> & {
  variant?: 'primary' | 'secondary';
};

export default function Button({
  variant = 'primary',
  className = '',
  children,
  ...props
}: Props) {
  const base = 'inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2';
  const variantClass = variant === 'primary' ? 'btn-primary' : 'btn-secondary';

  return (
    <motion.button
      whileTap={{ scale: 0.985 }}
      className={`${base} ${variantClass} ${className} btn-focus`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
