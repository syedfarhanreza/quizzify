
import { useLoaderData } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import Topic from '../Topic/Topic';
import './Home.css'

const Home = () => {

    const topics = useLoaderData();

    return (
        <div>
            <HomePage></HomePage>

            <h1 className='header'>Select Your Quiz Topic</h1>
            <div className='topics-container'>
                {
                    topics.data.map(topic => <Topic
                        key={topic.id}
                        topic={topic}
                    ></Topic>)
                }
            </div>
        </div>
    );
};

export default Home;