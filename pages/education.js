import Footer from "@/components/reuseable/Footer";
import Layout from "@/components/reuseable/Layout";
import { Container, Row, Col } from 'react-bootstrap'
import { HiAcademicCap } from "react-icons/hi";
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

                                {/* Experience description - DevOps Engineer */}
                                <Col md={6}>
                                    <div className='flex items-center gap-4 mb-4'>
                                        <PiToolboxFill className="text-gray-600 text-5xl" />
                                        <h1 className="text-white text-4xl">Experience</h1>
                                    </div>
                                    <div className="first__col ml-5">
                                        <div className="ml-8 mb-4">
                                            <h2 className="text-2xl font-medium">DevOps Engineer</h2>
                                            <small className="text-greyTextColor font-bold text-lg">April 2023 - Present</small>
                                            <h3 className="my-3 text-white text-lg font-medium">SIMNET Inc., Toronto</h3>
                                            <p className="text-greyTextColor">SIMNET simplifies cloud infrastructure by eliminating IT complexity and prioritizing exceptional service. Founded by Ted de Vos, the company is committed to delivering reliable, specialty cloud solutions.

</p>

                                        </div>
                                    </div>
                                </Col>

                                {/* Experience description - DevOps Engineer */}
                                <Col md={6}>
                                    <div className='flex items-center gap-4 mb-4'>
                                        <PiToolboxFill className="text-gray-600 text-5xl" />
                                        <h1 className="text-white text-4xl">Experience</h1>
                                    </div>
                                    <div className="first__col ml-5 mb-4">
                                        <div className="ml-8">
                                            <h2 className="text-2xl font-medium">DevOps Engineer</h2>
                                            <small className="text-greyTextColor font-bold text-lg">March 2022 - April 2023</small>
                                            <h3 className="my-3 text-white text-lg font-medium">Topron Consulting Inc., Toronto</h3>
                                            <p className="text-greyTextColor">Topron Consulting empowers individuals and businesses through expert-led training in Business Analysis, Project Management, Agile, and IT Consulting. Founded to bridge the workforce skills gap, Topron transforms careers with practical, high-impact programs.</p>

                                        </div>
                                    </div>
                                </Col>

                                {/* Experience description - Full Stack Developer */}
                                <Col md={6}>
                                    <div className='flex items-center gap-4 mb-4'>
                                        <PiToolboxFill className="text-gray-600 text-5xl" />
                                        <h1 className="text-white text-4xl">Experience</h1>
                                    </div>
                                    <div className="first__col ml-5">
                                        <div className="ml-8">
                                            <h2 className="text-2xl font-medium">Full Stack Developer</h2>
                                            <small className="text-greyTextColor font-bold text-lg">January 2020 - January 2022</small>
                                            <h3 className="my-3 text-white text-lg font-medium">FCMB Group, Nigeria</h3>
                                            <p className="text-greyTextColor">FCMB Group Plc is a leading Nigerian financial services provider with operations in banking, investment, and asset management. Evolving since 1977, it now serves over 7 million customers across Nigeria and the UK. The group aims to be the premier African-origin financial services brand.</p>

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

