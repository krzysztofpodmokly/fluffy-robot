'use client';

import useBearStore from '@/store';
import styles from './Resume.module.css'

type Format = 'A4' | 'A6'

const Resume = ({ format }: { format: Format }) => {
  const jobTitle = useBearStore((state: any) => state.formData.jobTitle)

  return (
    <div className='bg-slate-100 h-screen flex'>
      <div className={`${styles.page} ${format === 'A4' ? styles.pageA4 : styles.pageA6}`}>
        Resume 12
        {jobTitle}
      </div>
    </div>
  )
};

export default Resume;

