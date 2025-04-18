//my-app\src\app\certifications\page.tsx
'use client';

import Image from 'next/image';
import React from 'react';

interface CertCardProps {
  logo: string;
  title: string;
  issuer: string;
  date: string;
  id?: string;
  link: string;
}

function CertCard({ logo, title, issuer, date, id, link }: CertCardProps) {
  return (
    <div className="bg-black/60 p-6 rounded-xl shadow-md hover:shadow-xl hover:scale-[1.03] transition-all text-center flex flex-col items-center space-y-4">
      <Image src={logo} alt={`${issuer} logo`} width={64} height={64} className="rounded-md" />
      <h3 className="text-lg font-semibold text-green-300">{title}</h3>
      <p className="text-sm text-gray-300">{issuer}</p>
      <p className="text-xs text-purple-200">Issued {date}</p>
      {id && <p className="text-xs text-gray-400">ID: {id}</p>}
      <a
        href={link}
        target="_blank"
        className="text-white text-sm font-medium hover:text-green-300 transition"
      >
        View Credential
      </a>
    </div>
  );
}

export default function CertificationsPage() {
  const certs: CertCardProps[] = [
    {
        logo: '/MSFT.png',
        title: 'Microsoft Certified: Azure AI Fundamentals',
        issuer: 'Microsoft',
        date: 'Jul 2023',
        id: 'E5852FCB7A6C3F30',
        link: 'https://learn.microsoft.com/en-us/users/duncanturner-2106/credentials/e5852fcb7a6c3f30?ref=https%3A%2F%2Fwww.linkedin.com%2F',
      },
      {
        logo: '/intel.png',
        title: 'Intel® AI Fundamentals Specialization',
        issuer: 'Intel Corporation',
        date: 'Nov 2023',
        id: 'W8RXVQZVZ6C3',
        link: 'https://www.coursera.org/account/accomplishments/specialization/W8RXVQZVZ6C3',
      },
      {
        logo: '/amazon_web_services_logo (1).jpg',
        title: 'AWS Cloud Technical Essentials',
        issuer: 'Amazon Web Services (AWS)',
        date: 'Nov 2023',
        id: 'ZN88U8XH7RY7',
        link: 'https://www.coursera.org/account/accomplishments/verify/ZN88U8XH7RY7',
      },
    {
      logo: '/UCI.png',
      title: 'Getting Started with Go',
      issuer: 'University of California, Irvine',
      date: 'Sep 2024',
      id: '6OYVSJHH59SK',
      link: 'https://www.coursera.org/account/accomplishments/verify/6OYVSJHH59SK',
    },
    {
      logo: '/staveandthief_logo.jpg',
      title: 'Certified Bourbon Steward',
      issuer: 'Stave & Thief Society',
      date: 'Mar 2024',
      link: 'https://staveandthief.com/certifications/?v=c97b334ffd41',
    },
    {
        logo: '/auckland_council_logo.jpg',
        title: "Manager's Certificate",
        issuer: 'Auckland Council',
        date: 'Dec 2023',
        link: 'https://www.aucklandcouncil.govt.nz/licences-regulations/business-licences/alcohol-licences-fines/apply-managers-certificate-alcohol/Pages/default.aspx',
      },
    {
      logo: '/facebook_logo.jpg',
      title: 'Programming in Python',
      issuer: 'Meta',
      date: 'Jan 2024',
      id: 'P7UCGRJB7HX3',
      link: 'https://www.coursera.org/account/accomplishments/verify/P7UCGRJB7HX3',
    },
    {
      logo: '/MSFT.png',
      title: 'Explore Core Data Concepts in Microsoft Azure',
      issuer: 'Microsoft',
      date: 'Dec 2023',
      id: 'H9AE8Q8W3W47',
      link: 'https://www.coursera.org/account/accomplishments/verify/H9AE8Q8W3W47',
    },
    {
      logo: '/MSFT.png',
      title: 'Microsoft Azure SQL',
      issuer: 'Microsoft',
      date: 'Dec 2023',
      id: 'NS3DDACVRBW6',
      link: 'https://www.coursera.org/account/accomplishments/verify/NS3DDACVRBW6',
    },
    {
      logo: '/ibm_logo.jpg',
      title: 'Supervised Machine Learning: Regression',
      issuer: 'IBM',
      date: 'Oct 2023',
      id: 'B45PFTUUZL6W',
      link: 'https://www.coursera.org/account/accomplishments/verify/B45PFTUUZL6W',
    },
    {
      logo: '/ibm_logo.jpg',
      title: 'Supervised Machine Learning: Classification',
      issuer: 'IBM',
      date: 'Oct 2023',
      id: 'QLNL58G2US7E',
      link: 'https://www.coursera.org/account/accomplishments/verify/QLNL58G2US7E',
    },
    {
      logo: '/ibm_logo.jpg',
      title: 'Exploratory Data Analysis for Machine Learning',
      issuer: 'IBM',
      date: 'Sep 2023',
      id: 'RKYFQBAHQABL',
      link: 'https://www.coursera.org/account/accomplishments/verify/RKYFQBAHQABL',
    },
    {
      logo: '/ibm_logo.jpg',
      title: 'Deep Learning Essentials',
      issuer: 'IBM',
      date: 'Aug 2023',
      link: 'https://www.credly.com/badges/303672c0-953e-4eec-9450-a20111c49f69/linked_in_profile',
    },
    {
        logo: '/ibm_logo.jpg',
        title: 'Containers & Kubernetes Essentials',
        issuer: 'IBM',
        date: 'Jul 2023',
        id: '',
        link: 'https://www.credly.com/badges/9a335f02-19c2-4683-bd61-9277fa45deb2/linked_in_profile',
      },
      {
        logo: '/cisco_logo.jpg',
        title: 'Data Analytics Essentials',
        issuer: 'Cisco',
        date: 'Jul 2023',
        id: '',
        link: 'https://www.credly.com/badges/1c31a016-1ec2-4162-a2ba-1ef1c499d920/linked_in_profile',
      },
      {
        logo: '/ibm_logo.jpg',
        title: 'IBM Cloud Essentials',
        issuer: 'IBM',
        date: 'Jul 2023',
        id: '',
        link: 'https://www.credly.com/badges/e4e4b429-e76e-48d0-98cb-ac7412d120f3/linked_in_profile',
      },
      {
        logo: '/cisco_logo.jpg',
        title: 'Introduction to Data Science',
        issuer: 'Cisco',
        date: 'Jul 2023',
        id: '',
        link: 'https://www.credly.com/badges/5fce1cd7-e6da-4e7b-b38b-640481e22228/linked_in_profile',
      },
      {
        logo: '/cisco_logo.jpg',
        title: 'JavaScript Essentials 1',
        issuer: 'Cisco',
        date: 'Jul 2023',
        id: '',
        link: 'https://www.credly.com/badges/a34d7d9d-43ed-4117-a86a-1074c74bac0c/linked_in_profile',
      },
      {
        logo: '/ibm_logo.jpg',
        title: 'Machine Learning with Python - Level 1',
        issuer: 'IBM',
        date: 'Jul 2023',
        id: '',
        link: 'https://www.credly.com/badges/04e0b38b-ef71-4db5-9287-69a90ad6fced/linked_in_profile',
      },
      {
        logo: '/cisco_logo.jpg',
        title: 'Python Essentials 1',
        issuer: 'Cisco',
        date: 'Jul 2023',
        id: '',
        link: 'https://www.credly.com/badges/bd845466-50e2-431f-b1ce-0beebead2234/linked_in_profile',
      },
      {
        logo: '/ibm_logo.jpg',
        title: 'Python for Data Science',
        issuer: 'IBM',
        date: 'Jul 2023',
        id: '',
        link: 'https://www.credly.com/badges/20cd6db7-23ec-4dfb-9692-9be800d8ec35/linked_in_profile',
      },
      
  ];

  return (
    <div className="min-h-screen px-6 py-20 text-white bg-transparent">
      <div className="bg-black/80 rounded-2xl p-10 max-w-7xl mx-auto shadow-lg">
        <h1 className="text-4xl font-bold text-green-300 mb-12 text-center">Certifications</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {certs.map((cert, index) => (
            <CertCard key={index} {...cert} />
          ))}
        </div>
      </div>
    </div>
  );
}
