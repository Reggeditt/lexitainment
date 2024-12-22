'use client'

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

const formatPerson = (personData) => {
  const lines = personData.split('\n').map(line => line.trim())
  const name = lines[0]?.split(' (')[0]
  const gender = lines[0]?.match(/$$(.*?)$$/)?.[1] || ''
  const address = lines[2]?.replace('Address:', '').trim()
  const phone = lines[4]?.replace('Phone Number:', '').trim()
  const ssn = lines[6]?.replace('SSN:', '').trim()
  const email = lines[8]?.replace('Email:', '').trim()
  console.log('credit card:', lines)
  const ip = lines[10]?.replace('IP:', '').trim()
  const username = lines[12]?.replace('Username:', '').trim()
  const password = lines[14]?.replace('Password:', '').trim()
  const creditCard = lines[18]?.replace('Credit Card No.:', '').trim()
  const expDate = lines[20]?.replace('Expiration Date:', '').trim()
  const iban = lines[22]?.replace('IBAN:', '').trim()
  const swiftBic = lines[24]?.replace('Swift Bic Number:', '').trim()
  const company = lines[28]?.replace('Company:', '').trim()

  return `${name}|${gender}|${address}|${phone}|${ssn}|${email}|${ip}|${username}|${password}|${creditCard}|${expDate}|${iban}|${swiftBic}|${company}`
}

export default function TextFormatter() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')

  const handleInputChange = (e) => {
    setInput(e.target.value)
  }

  const handleFormat = () => {
    const people = input.split('\n\n')
    const formattedOutput = people.map(formatPerson).join('\n')
    setOutput(formattedOutput)
  }

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <h1 className="text-2xl font-bold">Text Formatter</h1>
      <div>
        <label htmlFor="input" className="block text-sm font-medium text-gray-700">
          Input Text
        </label>
        <Textarea
          id="input"
          rows={10}
          value={input}
          onChange={handleInputChange}
          placeholder="Paste your input text here..."
          className="mt-1"
        />
      </div>
      <Button onClick={handleFormat}>Format Text</Button>
      <div>
        <label htmlFor="output" className="block text-sm font-medium text-gray-700">
          Formatted Output
        </label>
        <Textarea
          id="output"
          rows={10}
          value={output}
          readOnly
          className="mt-1"
        />
      </div>
    </div>
  )
}




// 'use client'

// import { Button } from '@/components/ui/button';
// import { Textarea } from '@/components/ui/textarea';
// import React, { useState } from 'react'

// const formatPerson = (personData) => {
//   if (personData.includes('|')) {
//     // Data is already formatted
//     return personData.trim();
//   }

//   const lines = personData.split('\n').map(line => line.trim());
//   const getValue = (prefix) => {
//     const line = lines.find(l => l.startsWith(prefix));
//     return line ? line.replace(prefix, '').trim() : '';
//   };

//   const nameLine = lines[0] || '';
//   const name = nameLine.split(' (')[0].trim();
//   const gender = nameLine.match(/$$(.*?)$$/)?.[1] || '';
//   const address = getValue('Address:');
//   const phone = getValue('Phone Number:');
//   const ssn = getValue('SSN:');
//   const email = getValue('Email:');
//   const ip = getValue('IP:');
//   const username = getValue('Username:');
//   const password = getValue('Password:');
//   const creditCard = getValue('Credit Card No.:');
//   const expDate = getValue('Expiration Date:');
//   const iban = getValue('IBAN:');
//   const swiftBic = getValue('Swift Bic Number:');
//   const company = getValue('Company:');

//   return `${name}|${gender}|${address}|${phone}|${ssn}|${email}|${ip}|${username}|${password}|${creditCard}|${expDate}|${iban}|${swiftBic}|${company}`;
// };

// export default function TextFormatter() {
//   const [input, setInput] = useState('')
//   const [output, setOutput] = useState('')

//   const handleInputChange = (e) => {
//     setInput(e.target.value)
//   }

//   const handleFormat = () => {
//     try {
//       const people = input.split('\n\n').filter(person => person.trim() !== '');
//       const formattedOutput = people.map(formatPerson).join('\n');
//       setOutput(formattedOutput);
//     } catch (error) {
//       console.error('Error formatting text:', error);
//       setOutput('An error occurred while formatting the text. Please check your input and try again.');
//     }
//   }

//   return (
//     <div className="max-w-4xl mx-auto p-4 space-y-4">
//       <h1 className="text-2xl font-bold">Text Formatter</h1>
//       <div>
//         <label htmlFor="input" className="block text-sm font-medium text-gray-700">
//           Input Text
//         </label>
//         <Textarea
//           id="input"
//           rows={10}
//           value={input}
//           onChange={handleInputChange}
//           placeholder="Paste your input text here..."
//           className="mt-1"
//         />
//       </div>
//       <Button onClick={handleFormat}>Format Text</Button>
//       <div>
//         <label htmlFor="output" className="block text-sm font-medium text-gray-700">
//           Formatted Output
//         </label>
//         <Textarea
//           id="output"
//           rows={10}
//           value={output}
//           readOnly
//           className="mt-1"
//         />
//       </div>
//     </div>
//   )
// }

