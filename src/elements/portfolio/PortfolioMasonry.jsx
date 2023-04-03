import React, { Component, useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Project from './Project'

const Restaurant = <img src="/assets/images/portfolio/restaurant.jpg" alt="Restaurant" />;
const ExpenseTracker = <img src="/assets/images/portfolio/expenseTracker.jpg" alt="Expense tracker" />;
const ShowCheck = <img src="/assets/images/portfolio/showcheck.jpg" alt="Showcheck" />;

const techArray = [
    {
        src: "/assets/images/icons/Javascript-icon.png",
        alt: "Javascript icon",
        label: "Javascript"
    },
    {
        src: "/assets/images/icons/React-icon.png",
        alt: "React icon",
        label: "React"
    },
    {
        src: "/assets/images/icons/Laravel-icon.png",
        alt: "Laravel icon",
        label: "Laravel"
    }
]

const PortfolioList = [
    {
        image: Showcheck,
        category: 'Development',
        title: 'Stream Checker',
        description: 'An application that lets you search for shows and movies and find where they are streaming. Create an account to save and rate your favorite shows.',
        link: 'https://showcheck.herokuapp.com',
        tech: [techArray[0], techArray[1], techArray[2]],
        github: 'https://github.com/NirvanaClay/showcheck',
        id: 1
    },
    {
        image: Restaurant,
        category: 'Development',
        title: 'Restaurant Website',
        description: 'Sample restaurant website. Full functionality including authentication, a rewards system, and an ability to save your favorite items.',
        link: 'https://restaurant18.herokuapp.com',
        tech: [techArray[0], techArray[2]],
        github: 'https://github.com/NirvanaClay/restaurant',
        id: 2
    },
    {
        image: ExpenseTracker,
        category: 'Development',
        title: 'Monthly Expense Tracker',
        description: "Add, edit, and remove monthly expenses to help you keep track of where your money's going.",
        link: 'https://expense-tracker1.herokuapp.com',
        tech: [techArray[0], techArray[1], techArray[2]],
        github: 'https://github.com/NirvanaClay/BillTracker',
        id: 3
    }
]


const PortfolioMasonry = ({ item, column }) => {
    const list = PortfolioList.slice(0 , item);

    return(
        <React.Fragment>
            {list.map((project) => (
                <Project key={project.id} column={column} list={list} image={project.image} category={project.category} title={project.title} description={project.description} techList={project.tech} link={project.link} github={project.github} />
            ))}
            
        </React.Fragment>
    )
}
export default PortfolioMasonry;