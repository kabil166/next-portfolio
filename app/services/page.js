"use client";

import React, { useEffect, useState } from 'react';
import styles from '../styles/ServicesAndExpertise.module.css';
import dynamic from 'next/dynamic';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement } from 'chart.js';

// Dynamically import Bar and Line components to ensure they are client-side only
const Bar = dynamic(() => import('react-chartjs-2').then((mod) => mod.Bar), { ssr: false });
const Line = dynamic(() => import('react-chartjs-2').then((mod) => mod.Line), { ssr: false });

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement);

const Services = () => {
  const services = [
    { name: 'Web Development', description: 'Building responsive and scalable web applications using React, Next.js, and Node.js.' },
    { name: 'Mobile Development', description: 'Creating cross-platform mobile apps using React Native and Expo.' },
    { name: 'Backend Development', description: 'Designing APIs and backend services using Spring Boot, Node.js, and Express.' },
    { name: 'Game Development', description: 'Developing casual games like Ludo using Unity and React Native.' },
  ];

  const skillsData = [
    { skill: 'JavaScript', level: 'Expert', percentage: 90 },
    { skill: 'React', level: 'Advanced', percentage: 85 },
    { skill: 'Spring Boot', level: 'Intermediate', percentage: 75 },
    { skill: 'Node.js', level: 'Intermediate', percentage: 70 },
    { skill: 'MongoDB', level: 'Advanced', percentage: 80 },
  ];

  return (
    <div className={styles.container}>
      <h1>My Services</h1>
      <div className={styles.servicesContainer}>
        {services.map((service, index) => (
          <div key={index} className={styles.serviceCard}>
            <h2>{service.name}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>

      <div>
        <h2>My Skills</h2>
        <div style={{display:'flex', justifyContent:'space-around', flexWrap:'wrap'}}>
        {skillsData.map((skill, index) => (
          <div key={index} className={styles.skillCard} style={{ marginBottom: '50px' }}>
            <h3>{skill.skill} - {skill.level}</h3>

            {/* Horizontal Bar Chart */}
            <Bar
              data={{
                labels: [skill.skill],
                datasets: [
                  {
                    label: `${skill.skill} Skill Level`,
                    data: [skill.percentage],
                    backgroundColor: ['rgba(75, 192, 192, 0.2)'],
                    borderColor: ['rgba(75, 192, 192, 1)'],
                    borderWidth: 1,
                    barThickness: 30,
                  }
                ]
              }}
              options={{
                indexAxis: 'y',
                scales: {
                  x: {
                    beginAtZero: true,
                    max: 100,
                  }
                },
                plugins: {
                  legend: { display: false }
                },
              }}
            />
          </div>
        ))}
        </div>
        
      </div>
    </div>
  );
};

export default Services;