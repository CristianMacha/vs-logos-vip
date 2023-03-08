import {Inter} from '@next/font/google'
import AccessDirect from './layouts/AccessDirect'
import DescriptionMain from './layouts/DescriptionMain'
import FourReason from './layouts/FourReason'
import Presentation from './layouts/Presentation'
import ProcessDesign from './layouts/ProcessDesign'
import SomeExample from './layouts/SomeExample'
import Testimonials from './layouts/Testimonials'

const inter = Inter({subsets: ['latin']})

export default function Home() {
    return (
        <div>
            <Presentation/>
            <DescriptionMain/>
            <SomeExample/>
            <Testimonials/>
            <FourReason/>
            <ProcessDesign/>
            <AccessDirect/>
        </div>
    )
}
