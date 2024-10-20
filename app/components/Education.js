import React from 'react';
import styles from '../styles/Education.module.css';

const Education = () => {
  const qualifications = [
    {
      degree: 'Secondary Education',
      duration: '2014-2015',
      institution: 'Subhasganj High School',
      marks: '75%',
    },
    {
      degree: 'Higher Secondary Education',
      duration: '2015-2017',
      institution: 'Subhasganj High School',
      marks: '75%',
    },
    {
      degree: 'B.Tech in Computer Science and Engineering',
      duration: '2017-2021',
      institution: 'Jain University, Bangalore',
      marks: '70% with Distinction',
    },
    {
      degree: 'Full Stack with DSA, Java, and MERN Course',
      duration: 'Aug 2021 - Dec 2021',
      institution: 'Newton School',
      marks: '',
    },
  ];

  return (
    <div className={styles.educationContainer}>
      <h2 className={styles.h2tag}>Educational Qualifications</h2>
      <div className={styles.educationCards}>
      {qualifications.map((qual, index) => (
        <div key={index} className={styles.qualificationCard}>
          <h3 className={styles.h3tag}>{qual.degree}</h3>
          <p><strong>Institution:</strong> {qual.institution}</p>
          <p><strong>Duration:</strong> {qual.duration}</p>
          {qual.marks && <p><strong>Marks:</strong> {qual.marks}</p>}
        </div>
      ))}
      </div>
      
    </div>
  );
};

export default Education;