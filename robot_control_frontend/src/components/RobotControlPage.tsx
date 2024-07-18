import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RobotControlPage: React.FC = () => {
  const [status, setStatus] = useState<string | null>(null);

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/robot/status/');
        setStatus(response.data.status);
      } catch (error) {
        console.error('Error fetching status:', error);
      }
    };

    fetchStatus();
  }, []);

  const moveRobot = async () => {
    try {
      await axios.get('http://localhost:8000/api/robot/move/');
      alert('Robot moved!');
    } catch (error) {
      console.error('Error moving robot:', error);
    }
  };

  return (
    <div>
      <h1>Robot Control Page</h1>
      <p>Status: {status}</p>
      <button onClick={moveRobot}>Move Robot</button>
    </div>
  );
};

export default RobotControlPage;
