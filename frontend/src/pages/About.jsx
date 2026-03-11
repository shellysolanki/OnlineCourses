import React from "react";

const AboutPage = () => {
  const styles = {
    container: {
      width:"100vw",  
      backgroundImage: "url('https://media.istockphoto.com/id/542111792/photo/female-students-learning-computer-programming.jpg?s=612x612&w=0&k=20&c=38Cs7QNOOgT2gYTwajkHCnplO6M48R1-GGhezmMZhdM=')", 
      backgroundSize: "cover",
      backgroundPosition: "center",
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#fff",
      fontFamily: "Arial, sans-serif",
    },
    overlay: {
      backgroundColor: "rgba(0,0,0,0.6)",
      padding: "40px",
      borderRadius: "10px",
      maxWidth: "600px",
      textAlign: "center",
    },
    heading: {
      fontSize: "2em",
      marginBottom: "20px",
    },
    paragraph: {
      lineHeight: "1.6",
      marginBottom: "15px",
    },
    contact: {
      marginTop: "20px",
      fontWeight: "bold",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.overlay}>
        <h1 style={styles.heading}>About Our Company</h1>
        <p style={styles.paragraph}>
          We provide high‑quality online courses designed to help learners
          achieve their goals. Our mission is to make education accessible,
          engaging, and effective for everyone.
        </p>
        <div style={styles.contact}>
          <p>Email: contact@yourcompany.com</p>
          <p>Mobile: +91 9876543210</p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;