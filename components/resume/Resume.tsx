import styles from './Resume.module.css'

type Format = 'A4' | 'A6'

const Resume = ({ format }: { format: Format }) => {
  return (
    <div className='bg-slate-100'>
      <div className={`${styles.page} ${format === 'A4' ? styles.pageA4 : styles.pageA6}`}>
        Resume 12
      </div>
    </div>
  )
};

export default Resume;

