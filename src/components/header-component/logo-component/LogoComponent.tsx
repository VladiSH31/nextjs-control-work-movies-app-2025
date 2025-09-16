import './LogoComponent.css'
import Link from "next/link";


const LogoComponent = () => {
    return (
        <div className={'logo'}>
            <Link href={'/'}><h1>Watch Me</h1></Link>
        </div>
    );
};

export default LogoComponent;