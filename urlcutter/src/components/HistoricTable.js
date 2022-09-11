import { Link, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

export default function HistoricTable() {

    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Shortcut Link</TableCell>
                        <TableCell>Original Link</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {JSON.parse(localStorage.getItem("urlCutter")).map(row => (
                        <TableRow key={row[1]}>
                            <TableCell>
                                <Link href={window.location.origin + "/" + row[1]}>
                                    {window.location.origin}/{row[1]}
                                </Link>
                            </TableCell>
                            <TableCell>{row[0]}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
