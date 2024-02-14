import reactImg from '../logo.svg';

export default function Header () {
    return (
        < header >
            <div className ="react-header">
                <img src={reactImg} alt="Stylized atom" className="react-img"/>
                <div className="react-headertext-container">
                    <h1>React Todo App</h1>
                    <p> way to go...</p>
                </div>
            </div>
        </header >
    );
}