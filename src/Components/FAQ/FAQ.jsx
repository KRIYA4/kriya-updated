import * as React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function FAQ() {
  const data = [
    {
      question: "What is Kriya?",
      answer:
        "Kriya is an online platform that connects the creators with their users. Our users can chat or call to their desired creator and connect with them.",
    },
    {
      question: "How to use Kriya?",
      answer:
        "Users are required to recharge their kriya wallet to connect with their creators. We charge the user per minute basis and the amount would be debited from the user’s wallet as per the time the user is connected with the creator.",
    },
    {
      question: "Who are our Creators?",
      answer:
        "Our creators are experts in various domains such as finance, fitness, travel, beauty, sports, real estate, photography etc. The user will be able to chat or talk to the creator of his choice.",
    },
    {
      question: "Is it worth to use Kriya?",
      answer:
        "f you want the joy of talking to your favourite creator or if you require an expert advice that will let you decide better; kriya helps you connect with the expert creators. Every rupee you spend is worth of going in the right direction by talking to our expert creators.",
    },
  ];
  return (
    <section id="faq" className="d-flex flex-column align-items-center">
      <h5 className="mx-auto my-4 font-bold" style={{ color: "#3090f0" }}>FREQUENTLY ASKED QUESTIONS</h5>
      <br/>
      {data.map((item, index) => (
        <Accordion key={index} className="col-md-8 col-11">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>{item.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{item.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </section>
  );
}
