import React, { useEffect, useState } from "react";
import { Avatar, Button, List, Skeleton, Typography } from "antd";
import personImage from "../assets/listItemsImage.jpg";
import personImageSecond from "../assets/2.jpg";
import personImageThird from "../assets/3.jpg";
import personImageFourth from "../assets/4.jpg";
import personImageFifth from "../assets/5.jpg";
import personImageSixth from "../assets/7.jpg";
import { Container } from "react-bootstrap";
const AppointmentRequest = () => {
  const data = [
    {
      id: "1",
      image: personImage,
      title: "Kalinowski",
      description: "14 Male, 12 April 9:30",
      actionButtonName: "Declined",
    },
    {
      id: "2",
      image: personImageSecond,
      title: "Cano",
      description: "14 Male, 12 April 9:30",
      actionButtonName: "Confirmed",
    },
    {
      id: "3",
      image: personImageThird,
      title: "Gómez",
      description: "14 Male, 12 April 9:30",
      actionButtonName: "Confirmed",
    },
    {
      id: "4",
      image: personImageFourth,
      title: "Mitchelle",
      description: "14 Male, 12 April 9:30",
      actionButtonName: "Declined",
    },
    {
      id: "5",
      image: personImageFifth,
      title: "Rojo",
      description: "14 Male, 12 April 9:30",
      actionButtonName: "Declined",
    },
    {
      id: "6",
      image: personImage,
      title: "da Costa",
      description: "14 Male, 12 April 9:30",
      actionButtonName: "Declined",
    },
    {
      id: "7",
      image: personImageSixth,
      title: "Cano",
      description: "14 Male, 12 April 9:30",
      actionButtonName: "Declined",
    },
  ];
  return (
    <Container>
      {data.map((data, index) => {
        return (
          <Container className="list-items-container" key={index}>
            <Container style={{ display: "flex" }}>
              <Avatar src={data.image} />
              <Container style={{ marginLeft: "15px" }}>
                <Typography className="list-item-name">{data.title}</Typography>
                <Typography className="list-item-des">
                  {data.description}
                </Typography>
              </Container>
            </Container>
            <Container>
              <Button type="primary" className="action-btn-name">
                {data.actionButtonName}
              </Button>
            </Container>
          </Container>
        );
      })}
    </Container>
  );
};
export default AppointmentRequest;
