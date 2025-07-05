import Footer from '@/components/reuseable/Footer'
import Layout from '../components/reuseable/Layout'
import { Container, Row, Col, Image, Button } from "react-bootstrap"
import SectionHeading from '@/components/reuseable/SectionHeading'
import Spinner from '@/components/reuseable/Spinner'
import UseLoading from '@/components/reuseable/UseLoading'
import { RevealWrapper } from 'next-reveal' // animation


export default function AboutPage() {

  const isLoading = UseLoading()

  return (
    <>
      {
        isLoading ? <Spinner /> : <>
          <Layout />
          <section className="container__area">

            <Container fluid="md">
              <SectionHeading>About Me</SectionHeading>
              <Row className='items-center'>
                <Col lg={6} md={12} sm={12} xs={12}>
                  <div className='h-full w-full'>
                    <RevealWrapper delay={200} origin='left'>

                      <Image
                        src='/assets/Festus Osayi.png'
                        alt="my photo image"
                        className=" object-fit-cover w-full h-full rounded-[50%]"
                        fluid
                      />
                    </RevealWrapper>
                  </div>


                </Col>
                <Col lg={6} md={12} sm={12} xs={12}>
                  <p className="text-4xl heading">Hi There! I&apos;m Festus Osayi</p>
                  <p className="text-2xl mt-3 text-headingColor">DevOps Engineer | Fullstack Developer</p>
                  <p className="text-greyTextColor leading-7 mt-3">Festus&apos;s passion for coding stems from his love for problem-solving and creating solutions through technology. He is constantly seeking to expand his knowledge and skills in various programming languages and frameworks, always staying ahead of the curve in the ever-evolving tech industry.</p>

                  <p className="text-greyTextColor leading-7 mt-3">
                    In addition to his technical expertise, Festus is a strong communicator and team player, able to effectively collaborate with others to achieve project goals. He values diversity and inclusivity in the tech community, actively promoting a supportive and inclusive environment for all individuals.
                  </p>


                  {/* About Festus */}
                  <ul className='text-greyTextColor leading-10 mt-3'>
                    <li>
                      Birthday
                      <span
                        className='inline ml-12'
                      >
                        :&nbsp;&nbsp;&nbsp;&nbsp;July 16<sup>th</sup>
                      </span>
                    </li>
                    <li>
                      Email
                      <span
                        className='inline ml-[4.2rem]'
                      >
                        :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;osayifestus25@outlook.com
                      </span>
                    </li>
                    <li
                    >
                      Based in
                      <span className='inline ml-[2.9rem]'>
                        :&nbsp;&nbsp;&nbsp;&nbsp; Ontario, Canada
                      </span>
                    </li>
                    <li>
                      Language
                      <span
                        className='inline ml-[2.3rem]'
                      >
                        :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;English, French
                      </span>
                    </li>
                  </ul>
                  <a href='/assets/FESTUS OSAYI_RESUME.pdf' download
                    className="btn light mt-5" aria-labelledby='Downloadresumebutton'
                  >Download Resume</a>
                </Col>
              </Row>
            </Container>
          </section>
          <Footer />
        </>
      }


    </>
  )
}

