import React from 'react'

import { TableContainer, Table, TableHead, TableBody, TableCell, Paper, TableRow } from '@mui/material'

const data = [
    {
        id: 1,
        code: 4,
        meaning: "Somebody from family",
        describtion: "Text text text text text"
    },
    {
        id: 2,
        code: 13,
        meaning: "Gotta go smoke marijuana",
        describtion: "Text text text text text"
    },
    {
        id: 3,
        code: 22,
        meaning: "We are on fire",
        describtion: "Text text text text text"
    },
    {
        id: 4,
        code: 23,
        meaning: "Finished please",
        describtion: "Text text text text text"
    },
    {
        id: 5,
        code: 7,
        meaning: "Need to hide the cargo. There is no danger near",
        describtion: "Text text text text text"
    },
    {
        id: 6,
        code: 20,
        meaning: "Police beside",
        describtion: "Text text text text text"
    },
    {
        id:7,
        code: 22,
        meaning: "We are on fire",
        describtion: "Text text text text text"
    },
    {
        id: 8,
        code: 95,
        meaning: "Soldiers of the Armed Forces of Ukraine", 
        describtion: "Text text text text text"
    },
    {
        id:9,
        code: 49,
        meaning: `Territorial defense soldiers`,
        describtion: "Text text text text text"
    },
    {
        id: 10,
        code: 15,
        meaning: "Gotta hide the marijuana. Near danger",
        describtion: "Text text text text text"
    },
    {
        id: 11,
        code: 2,
        meaning: "Near Igor's homies",
        describtion: "Text text text text text"
    },
    {
        id: 12,
        code: 3,
        meaning: "Near Leonid's homies",
        describtion: "Text text text text text"
    },
    {
        id: 13,
        code: 6,
        meaning: "White eyes after smoking marijuana || Do I have red eyes?",
        describtion: "Text text text text text"
    },
    {
        id: 14,
        code: 7,
        meaning: "Red eyes after smoking marijuana",
        describtion: "Text text text text text"
    },
    {
        id: 15,
        code: 77,
        meaning: "Someone smells strong",
        describtion: "Text text text text text"
    },
    {
        id: 16,
        code: 9.1,
        meaning: "The police take us and we run",
        describtion: "Text text text text text"
    },
    {
        id: 17,
        code: 9.2,
        meaning: "The police take us and we surrender",
        describtion: "Text text text text text"
    },
    {
        id: 18,
        code: 8,
        meaning: "The boys and I are sitting in a restaurant and we see the police",
        describtion: "Text text text text text"
    },
    {
        id: 19,
        code: 38,
        meaning: "Go fuck yourself",
        describtion: "Text text text text text"
    },
    {
        id: 20,
        code: 37,
        meaning: "Shut your mouth",
        describtion: "Text text text text text"
    },
    {
        id: 21,
        code: 70,
        meaning: "Fucking a group of dude in front",
        describtion: "Text text text text text"
    },
    {
        id: 22,
        code: 14,
        meaning: "Near strangers to us people",
        describtion: "Text text text text text"
    } 
]


export default function Tables() {
    return (

        <TableContainer component={Paper} >
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Code</TableCell>
                        <TableCell>Meaning</TableCell>
                        <TableCell>Description</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        data.map(el=>(
                            <TableRow key={el.id} >
                                <TableCell>{el.id}</TableCell>
                                <TableCell>{el.code}</TableCell>
                                <TableCell>{el.meaning}</TableCell>
                                <TableCell>{el.describtion}</TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>

/*         <div>
            Hello
            {
                data.map(el => {
                    return <li key={el.id} >{el.code}</li>
                })
            }
        </div> */
    )
}


