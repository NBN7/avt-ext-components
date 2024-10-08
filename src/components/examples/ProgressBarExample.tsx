import { useState, useEffect } from 'react';
import { Progress } from '@/components/ui/progress';

export const ProgressBarExample = () => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage((prev) => (prev < 100 ? prev + 10 : 0));
    }, 1000);

    if (percentage === 100) clearInterval(interval);

    return () => clearInterval(interval);
  }, []);

  return <Progress value={percentage} />;
};
