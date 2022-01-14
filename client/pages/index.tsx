import { Box, Typography } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Navbar from "../components/Navbar";
import MainLayout from "../layouts/MainLayout";

const Home: NextPage = () => {
  return (
    <>
      <MainLayout>
        <Box className={styles.container}>
          <Head>
            <title>Music Platform</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Navbar />
          <Typography variant="h3" component="h2" gutterBottom>
            Welcome to Quasar Player
          </Typography>
          <Typography variant="h4" component="h3" gutterBottom>
            Here you can find best music
          </Typography>
          <main className={styles.main}></main>
        </Box>
      </MainLayout>
    </>
  );
};

export default Home;