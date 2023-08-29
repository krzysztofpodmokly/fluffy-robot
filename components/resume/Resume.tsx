'use client';

import useBearStore from '@/store';
import Image from 'next/image';
import cn from 'classnames';

import styles from './Resume.module.css'

type Format = 'A4' | 'A6'
interface ResumeProps {
  format: Format;
  isPreview?: boolean;
}

const Resume = ({ format, isPreview }: ResumeProps) => {
  const { firstName, photo, lastName, jobTitle, email, country, city, phone } = useBearStore((state: any) => state.formData)

  return (
    <div className={cn('bg-slate-100 h-screen flex', {
      [styles.preview]: isPreview
    })}>
      <div className={`flex text-xs ${styles.page} ${format === 'A4' ? styles.pageA4 : styles.pageA6}`}>

        <div className='w-2/3 p-5'>
          <div className='flex items-center mb-4'>
            <div className='mr-4'>
              <Image src={photo.value || '/default-avatar.jpg'} alt="Avatar" width="30" height="30" className='h-14 w-14 rounded-full' />
            </div>
            <div>
              <h2 className='text-xl font-bold'>{firstName.value || 'John'} {lastName.value || 'Doe'}</h2>
              <h6 className='text-slate-400'>{jobTitle.value || 'Frontend developer'}</h6>
            </div>
          </div>

          <div className='mb-4'>
            <h3 className='font-bold mb-1'>Profile</h3>
            <article>Lorem ipsum dolor sit amet consectetur adipisicing elit.</article>
          </div>

          <div className='mb-4'>
            <h3 className='font-bold mb-1'>Employment History</h3>

            <div>
              <h5 className='uppercase font-bold'>Frontend Developer, Company</h5>
              <h6 className='uppercase'>March 2000 - present</h6>
              <ul className='list-decimal ml-5'>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                <li>Iusto, vel esse cumque fugiat suscipit nobis similique autem necessitatibus.</li>
                <li>Reiciendis eligendi quidem dolor itaque quisquam iste aperiam commodi neque, qui debitis</li>
              </ul>
            </div>

            <div>
              <h5 className='uppercase font-bold'>Frontend Developer, Company</h5>
              <h6 className='uppercase'>March 2000 - February 1999</h6>
              <ul className='list-decimal ml-5'>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                <li>Iusto, vel esse cumque fugiat suscipit nobis similique autem necessitatibus.</li>
              </ul>
            </div>

            <div>
              <h5 className='uppercase font-bold'>Frontend Developer, Company</h5>
              <h6 className='uppercase'>March 1998 - January 2000</h6>
              <ul className='list-decimal ml-5'>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              </ul>
            </div>
          </div>

          <div className='mb-4'>
            <h3 className='font-bold mb-1'>Education</h3>

            <div>
              <h5 className='uppercase font-bold'>Studies, School, City</h5>
              <h6 className='uppercase'>March 2000 - present</h6>
              <ul className='ml-5'>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              </ul>
            </div>

            <div>
              <h5 className='uppercase font-bold'>Studies, School, City</h5>
              <h6 className='uppercase'>March 2000 - present</h6>
              <ul className='ml-5'>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              </ul>
            </div>

            <div>
              <h5 className='uppercase font-bold'>Studies, School, City</h5>
              <h6 className='uppercase'>March 2000 - present</h6>
              <ul className='ml-5'>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              </ul>
            </div>
          </div>

          <div className='mb-4'>
            <h3 className='font-bold mb-1'>Familiar technologies</h3>

            <div>
              <ul className='ml-2 list-disc'>
                <li>React</li>
                <li>Redux</li>
                <li>Zustand</li>
                <li>React Hook Form</li>
                <li>NextJS</li>
              </ul>
            </div>
          </div>

          <div className='mb-4'>
            <h3 className='font-bold mb-1'>Clause</h3>

            <article className="clause">
              I agree to the processing of personal data provided in this document for realising
              the recruitment process pursuant to the Personal Data Protection Act of 10 May
              2018 (Journal of Laws 2018, item 1000) and in agreement with Regulation (EU)
              2016/679 of the European Parliament and of the Council of 27 April 2016 on the
              protection of natural persons with regard to the processing of personal data and on
              the free movement of such data, and repealing Directive 95/46/EC (General Data
              Protection Regulation)
            </article>
          </div>
        </div>

        <div className='w-1/3 bg-slate-600 text-slate-50 p-5 pt-16'>
          <div className='mb-4'>
            <h3 className='font-bold mb-1'>Details</h3>
            <ul>
              <li>{city.value || 'Cracow'}</li>
              <li>{country.value || 'Poland'}</li>
              <li>{phone.value || '123 456 789'}</li>
              <li>{email.value || 'test@test.com'}</li>
            </ul>
          </div>

          <div className='mb-4'>
            <h3 className='font-bold mb-1'>Links</h3>
            <ul>
              <li>Github</li>
              <li>Linkedin</li>
            </ul>
          </div>

          <div className='mb-4'>
            <h3 className='font-bold mb-1'>Skills</h3>
            <ul>
              <li>Ability to Work in Team</li>
              <li>Adaptability</li>
              <li>Ability to Learn Quickly</li>
              <li>Highly Motivated</li>
              <li>Comunication Skills</li>
            </ul>
          </div>

          <div>
            <h3 className='font-bold mb-1'>Languages</h3>
            <ul>
              <li>Polish - native</li>
              <li>English - C1</li>
              <li>German - B2</li>
            </ul>
          </div>

        </div>
      </div>
    </div >
  )
};

export default Resume;

