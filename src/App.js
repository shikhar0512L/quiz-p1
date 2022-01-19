import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'Which language we use in A.I',
			answerOptions: [
				{ answerText: 'Java', isCorrect: false },
				{ answerText: 'PHP', isCorrect: false },
				{ answerText: 'Python', isCorrect: true },
				{ answerText: 'Rust', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
		{
			questionText: ' What is the range of values that can be stored by int datatype in C?',
			answerOptions: [
				{ answerText: '0 to (2^31) - 1', isCorrect: false },
				{ answerText: '-(2^63) to (2^63) - 1', isCorrect: false },
				{ answerText: '-256 to 255', isCorrect: false },
				{ answerText: '-(2^31) to (2^31) - 1', isCorrect: true },
			],
		},
		{
			questionText: 'Which software we use in hacking?',
			answerOptions: [
				{ answerText: 'OS', isCorrect: false },
				{ answerText: 'Linux', isCorrect: false },
				{ answerText: 'Python', isCorrect: false },
				{ answerText: 'kali linux', isCorrect: true },
			],
		},
		{
			questionText: 'Who is the father of C language?',
			answerOptions: [
				{ answerText: 'Steve Jobs', isCorrect: false },
				{ answerText: 'James Gosling', isCorrect: false },
				{ answerText: 'Rasmus Lerdorf', isCorrect: false },
				{ answerText: 'Dennis Ritchie', isCorrect: true },
			],
		},
		{
			questionText: 'who is father of science',
			answerOptions: [
				{ answerText: 'Hemant project', isCorrect: false },
				{ answerText: 'Galileo Galilei', isCorrect: true },
				{ answerText: 'Code with shikhar', isCorrect: false },
				{ answerText: 'James Gosling', isCorrect: false },
			],
		},
		{
			questionText: 'Who is the father of JAVA',
			answerOptions: [
				{ answerText: 'Jeff bezos', isCorrect: false },
				{ answerText: 'Steve jobs', isCorrect: false },
				{ answerText: 'Hemants project', isCorrect: false },
				{ answerText: 'James Gosling', isCorrect: true },
			],
		},
		 {
		 	questionText: 'What is the full form of HTML',
		 	answerOptions: [
		 		{ answerText: 'HyperText Markup pro Language', isCorrect: false },
		 		{ answerText: 'HyperText noice Markup Language', isCorrect: false },
		 		{ answerText: 'Heroes text markup language', isCorrect: false },
		 		{ answerText: 'Hyper text markup language', isCorrect: true },
		 	],
		 }, 
		 {
		 	questionText: 'Who is the world richest person in 2022 ?',
		 	answerOptions: [
		 		{ answerText: 'Bernard Arnault & family $187.7b', isCorrect: false },
		 		{ answerText: 'Bill Gates $137.4b', isCorrect: false },
		 		{ answerText: 'Mark Zuckerberg $117.7b', isCorrect: false },
		 		{ answerText: 'Elon Musk $294.2b', isCorrect: true },
		 	],
		 },
		 {
		 	questionText: 'who has developed python language?',
		 	answerOptions: [
		 		{ answerText: 'Elon musk', isCorrect: false },
		 		{ answerText: 'Steve jobs', isCorrect: false },
		 		{ answerText: 'Charles babbage', isCorrect: false },
		 		{ answerText: 'Guido van Rossum', isCorrect: true },
		 	],
		 },
		 {
		 	questionText: 'Who has developed R language',
		 	answerOptions: [
		 		{ answerText: 'Alexender volta', isCorrect: false },
		 		{ answerText: 'Bill gates', isCorrect: false },
		 		{ answerText: 'Elon musk', isCorrect: false },
		 		{ answerText: 'Ross Ihaka and Robert Gentleman', isCorrect: true },
		 	],
		 },
		 {
		 	questionText: 'What is the syntax to comment a block of code in python',
		 	answerOptions: [
		 		{ answerText: '//', isCorrect: false },
		 		{ answerText: '||', isCorrect: false },
		 		{ answerText: '...', isCorrect: false },
		 		{ answerText: '#', isCorrect: true },
		 	],
		 },
		 {
		 	questionText: 'What is the syntax to comment a block of code in JavaScript',
		 	answerOptions: [
		 		{ answerText: '#', isCorrect: false },
		 		{ answerText: '$', isCorrect: false },
		 		{ answerText: '%', isCorrect: false },
		 		{ answerText: '//', isCorrect: true },
		 	],
		 },
		 {
		 	questionText: 'What is classes in JavaScript?',
		 	answerOptions: [
		 		{ answerText: 'classes are nothing', isCorrect: false },
		 		{ answerText: 'classes are used as if condition', isCorrect: false },
		 		{ answerText: 'Classes are used to make functions', isCorrect: false },
		 		{ answerText: 'Classes are a template for creating objects.', isCorrect: true },
		 	],
		 },
		 {
		 	questionText: 'Is python a case sensitive language',
		 	answerOptions: [
		 		{ answerText: 'no', isCorrect: false },
		 		{ answerText: 'dont know', isCorrect: false },
		 		{ answerText: 'maybe', isCorrect: false },
		 		{ answerText: 'yes', isCorrect: true },
		 	],
		 },
		 {
		 	questionText: 'what is penetration testing',
		 	answerOptions: [
		 		{ answerText: 'dont know', isCorrect: false },
		 		{ answerText: 'penetration testing means to create something', isCorrect: false },
		 		{ answerText: 'penetration testing means to test an object', isCorrect: false },
		 		{ answerText: 'A penetration test is an authorized simulated cyberattack on a computer system', isCorrect: true },
		 	],
		 },
		 {
		 	questionText: 'What is loop?',
		 	answerOptions: [
		 		{ answerText: 'loop is used to test a code', isCorrect: false },
		 		{ answerText: 'dont know', isCorrect: false },
		 		{ answerText: 'Loop is used to run the code', isCorrect: false },
		 		{ answerText: 'a loop is a sequence of instruction s that is continually repeated until a certain condition is reached', isCorrect: true },
		 	],
		 },
		 {
		 	questionText: 'What is the ideal work environment?',
		 	answerOptions: [
		 		{ answerText: 'create a data', isCorrect: false },
		 		{ answerText: 'To fetch api', isCorrect: false },
		 		{ answerText: 'No idea', isCorrect: false },
		 		{ answerText: 'An ideal work environment should train and motivate employees to live a balanced life.', isCorrect: true },
		 	],
		 },
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
