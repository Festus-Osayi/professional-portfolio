import Footer from "@/components/reuseable/Footer";
import Layout from "@/components/reuseable/Layout";
import { Container, Row, Col } from 'react-bootstrap'
import { HiAcademicCap } from "react-icons/hi";
import { FaSchool } from "react-icons/fa";
import SectionHeading from "@/components/reuseable/SectionHeading";
import UseLoading from "@/components/reuseable/UseLoading";
import Spinner from "@/components/reuseable/Spinner";
import { PiToolboxFill } from "react-icons/pi";

export default function EducationPage() {
    const isLoading = UseLoading()
    return (
        <>
            {
                isLoading ? <Spinner /> : <>
                    <Layout />
                    {/* My education and Experience */}
                    <section className="bg-[#070D1B] container__area">
                        <Container fluid='md'>
                            <SectionHeading>
                                Education
                            </SectionHeading>
                            <Row>
                                {/* My educational background */}
                                <Col md={6} className="mb-4">
                                    <div className='flex items-center gap-4 mb-4'>
                                        <HiAcademicCap className="text-gray-600 text-5xl" />
                                        <h1 className="text-white text-4xl">Education</h1>
                                    </div>
                                    <div className="first__col ml-5">
                                        <div className="ml-8">
                                            <h2 className="text-2xl font-medium">Diploma in Computer Science</h2>
                                            <small className="text-greyTextColor font-bold text-lg">May 2022 - August 2023</small>
                                            <h3 className="my-3 text-white text-lg font-medium">Seneca College, Toronto</h3>
                                            <p className="text-greyTextColor">My educational background equipped me with skills in mobile development, software testing, web development, distributed programming techniques and database administration.</p>

                                        </div>
                                    </div>
                                    {/* End of my educational background */}
                                </Col>

                                {/* Experience description - Software Engineer */}
                                <Col md={6}>
                                    <div className='flex items-center gap-4 mb-4'>
                                        <PiToolboxFill className="text-gray-600 text-5xl" />
                                        <h1 className="text-white text-4xl">Experience</h1>
                                    </div>
                                    <div className="first__col ml-5">
                                        <div className="ml-8 mb-4">
                                            <h2 className="text-2xl font-medium">Software Engineer</h2>
                                            <small className="text-greyTextColor font-bold text-lg">July 2024 - March 2025</small>
                                            <h3 className="my-3 text-white text-lg font-medium">Headstarter AI, New York</h3>
                                            <p className="text-greyTextColor">Headstarter AI is a professional development platform that connects engineers with real-world projects and mentorship from industry leaders. As a Software Engineer, I contributed to building scalable, AI-driven web applications using React, Next.js, and Node.js.

</p>

                                        </div>
                                    </div>
                                </Col>

                                {/* Experience description - Frontend */}
                                <Col md={6}>
                                    <div className='flex items-center gap-4 mb-4'>
                                        <PiToolboxFill className="text-gray-600 text-5xl" />
                                        <h1 className="text-white text-4xl">Experience</h1>
                                    </div>
                                    <div className="first__col ml-5">
                                        <div className="ml-8">
                                            <h2 className="text-2xl font-medium">Frontend Developer</h2>
                                            <small className="text-greyTextColor font-bold text-lg">November 2022 - April 2024</small>
                                            <h3 className="my-3 text-white text-lg font-medium">Allwood Products, Vaughan</h3>
                                            <p className="text-greyTextColor">Allwood Products is a company that manufactures indoor and outdoor furniture across the globe, and I was opportune to intern as a front-end developer, I was able to put my talent and problem-solving skills into a real-world and more practical application.</p>

                                        </div>
                                    </div>
                                </Col>
                                {/* End of my experience description */}
                            </Row>
                        </Container>
                    </section>
                    <Footer />
                </>
            }

        </>
    )
}

