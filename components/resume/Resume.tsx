'use client';

import useBearStore from '@/store';
import styles from './Resume.module.css'

type Format = 'A4' | 'A6'
interface ResumeProps {
  format: Format;
  tempProps?: boolean
}

const Resume = ({ format, tempProps }: ResumeProps) => {
  const jobTitle = useBearStore((state: any) => state.formData.jobTitle)

  return (
    <div className='bg-slate-100 h-screen flex'>
      <div className={`flex text-xs ${styles.page} ${format === 'A4' ? styles.pageA4 : styles.pageA6}`}>

        <div className='w-2/3 p-5'>

          {tempProps ? (
            <>
              <div className='flex mb-4'>
                <div className='mr-4'>
                  <img src="/default-avatar.jpg" alt="avatar" width="50" height="50" />
                </div>
                <div>
                  <h3 className='text-xl'>John Doe</h3>
                  <h6 className='text-slate-400'>Frontend developer</h6>
                </div>
              </div>

              <div className='mb-4'>
                <h3 className='font-bold mb-1'>Profile</h3>
                <aside>Lorem ipsum dolor sit amet consectetur adipisicing elit.</aside>
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
            </>
          ) : (
            <>
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
                  <ul className='ml-5'>
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

                <div>
                  <p>I agree to the processing of personal data provided in this document for realising
                    the recruitment process pursuant to the Personal Data Protection Act of 10 May
                    2018 (Journal of Laws 2018, item 1000) and in agreement with Regulation (EU)
                    2016/679 of the European Parliament and of the Council of 27 April 2016 on the
                    protection of natural persons with regard to the processing of personal data and on
                    the free movement of such data, and repealing Directive 95/46/EC (General Data
                    Protection Regulation)</p>
                </div>
              </div>
            </>
          )}





        </div>

        <div className='w-1/3 bg-slate-600 text-slate-50  flex flex-col justify-center p-5'>
          {tempProps && (
            <>
              <div className='mb-4'>
                <h3 className='font-bold mb-1'>Details</h3>
                <ul>
                  <li>Cracow</li>
                  <li>Poland</li>
                  <li>123 456 789</li>
                  <li>test@test.com</li>
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
            </>
          )}

        </div>
      </div>
    </div>
  )
};

export default Resume;

