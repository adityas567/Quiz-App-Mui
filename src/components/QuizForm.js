import React from "react";
import { TextField, FormControl, Button, Grid, Radio, IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik';
import checkSchema from "../schemas/Validator";

const QuizForm = () => {
    return (
        <div>
            <Formik initialValues={
                {
                    questions: [{ question: '', options: [], correctOption: '' }]
                }
            }
                validationSchema={checkSchema}
                onSubmit={(values) => { console.log(values)}}>
                {(formik) =>
                (
                    <Form>
                        <FieldArray name="questions" render={
                            (arrayHelpers) => {
                                return (
                                    <div>
                                        {formik.values.questions.map((question, index) => (
                                            <div key={index}>
                                                <Grid container spacing={1} >
                                                    <Grid container sx={{ mb: 3,mt:3 }}>
                                                        <Grid item sx={{ display: "flex", alignItems: "center" }}>
                                                            {`Q:${index + 1}`}
                                                        </Grid>
                                                        <Grid item xs={7} md={9} sx={{ display: "flex", alignItems: "center" }}>
                                                            <Field as={TextField} label="Question" placeholder="Enter Your Question" variant="outlined" color="secondary" type="text" fullWidth name={`questions.${index}.question`} onSubmit={(e) => console.log(e.target.value)} />
                                                        </Grid>
                                                        <Grid item xs={2} md={2} sx={{ display: "flex", alignItems: "center", marginLeft: "20px" }}>
                                                            <IconButton aria-label="delete" color="primary" size="medium" onClick={() => arrayHelpers.insert(formik.values.questions.length + 1, { question: '', options: [], correctOption: '' })}>
                                                                <AddIcon fontSize="medium" />
                                                            </IconButton>
                                                            <IconButton aria-label="delete" color="error" size="medium" onClick={() => arrayHelpers.remove(index)}>
                                                                <DeleteIcon fontSize="medium" />
                                                            </IconButton>
                                                        </Grid>
                                                        <Grid sx={{marginLeft:"20px",color:"red"}}>
                                                        <ErrorMessage component='span' className='text-danger' name={`questions.${index}.question`} />
                                                        </Grid>
                                                    </Grid>

                                                    <Grid container sx={{color:"red"}}>
                                                        <Grid item xs={12} md={6}>
                                                            <Field type='radio'
                                                                name={`questions[${index}].correctOption`} value='0'
                                                            />
                                                            <Field as={TextField} label="Option" placeholder="Enter Your Option" variant="outlined" color="secondary" type="text" name={`questions.${index}.options[0]`} sx={{ mb: 3 }} />
                                                            <ErrorMessage component='span' className='text-danger' name={`questions.${index}.options`} />
                                                        </Grid>
                                                        <Grid item xs={12} md={6}>
                                                            <Field type='radio'
                                                                name={`questions[${index}].correctOption`} value='1'
                                                            />
                                                            <Field as={TextField} label="Option" placeholder="Enter Your Option" variant="outlined" color="secondary" type="text" name={`questions.${index}.options[1]`} sx={{ mb: 3 }} />
                                                            <ErrorMessage component='span' className='text-danger' name={`questions.${index}.options`} />
                                                        </Grid>
                                                        <Grid item xs={12} md={6}>
                                                            <Field type='radio'
                                                                name={`questions[${index}].correctOption`} value='2'
                                                            />
                                                            <Field as={TextField} label="Option" placeholder="Enter Your Option" variant="outlined" color="secondary" type="text" name={`questions.${index}.options[2]`} sx={{ mb: 1 }} />
                                                        </Grid>
                                                        <Grid item xs={12} md={6}>
                                                            <Field type='radio'
                                                                name={`questions[${index}].correctOption`} value='3'
                                                            />
                                                            <Field as={TextField} label="Option" placeholder="Enter Your Option" variant="outlined" color="secondary" type="text" name={`questions.${index}.options[3]`} sx={{ mb: 1 }} />
                                                        </Grid>
                                                    <ErrorMessage component='span' className='text-danger' name={`questions.${index}.correctOption`} />
                                                    </Grid>
                                                </Grid>

                                            </div>

                                        ))}
                                    </div>
                                )
                            }
                        } />
                        <Grid container>
                            <Grid item xs={12} md={12} sx={{ display: "flex", justifyContent: "end", width: "100%" }}>
                                <Button variant="contained" type="submit">Submit</Button>
                            </Grid>
                        </Grid>
                    </Form>
                )}
            </Formik>

        </div >

    );
}

export default QuizForm