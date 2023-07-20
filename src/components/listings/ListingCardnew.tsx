import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { deleteAdventure } from "../../features/deleteAdventureSlice";

import { useLocation, useNavigate } from "react-router";
import { motion, useAnimation } from "framer-motion";

import { EnumData } from "../../types";

import HeartButton from "../buttons/HeartButton";
import { useMediaQuery } from "@mui/material";

import ShortText from "../bookingbarfilter/ShortText";
import { Button } from "@material-tailwind/react";

interface ListingCardProps {
  data: EnumData | undefined;
}

const ListingCardnew: React.FC<ListingCardProps> = ({ data }) => {
  const headingControls = useAnimation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const onDelete = async () => {
    await dispatch(deleteAdventure(data?._id));

    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  useEffect(() => {
    const startAnimation = async () => {
      await headingControls.start({
        x: 0,
        transition: { duration: 0.4, delay: 0.5 },
      });
    };
    startAnimation();
  }, [headingControls]);
  const isSmallScreen = useMediaQuery("(max-width: 600px)");

  const containerStyle: React.CSSProperties = {
    display: "flex",
    gridTemplateColumns: isSmallScreen ? "1fr" : "1fr 1fr",
    margin: "1px",
    justifyContent: "space-between",
    position: "relative", // Agregar posición relativa
  };
  const imageStyle: React.CSSProperties = {
    borderRadius: "10px",
  };
  const imageContainerStyle: React.CSSProperties = {
    margin: "-1vw",
    borderRadius: "10px",
    display: 'flex',
    position: 'relative',
    width: "30%",
  };
  const gridStyleRight: React.CSSProperties = {
    flexDirection: "column",
    top: "1px", 
    left: "2vw",
    position: "relative",
    marginRight: '3vw'
  };
  const heartStyle: React.CSSProperties = {
    top: "-10px", // Ajustar posición desde la parte superior
    right: "-10px", // Ajustar posición desde la parte derecha
    display: "grid",
    position: "absolute",
    justifyContent: "space-between",
  };
  const priceStyle: React.CSSProperties = {
    bottom: "-15px", // Ajustar posición desde la parte superior
    right: "1px", // Ajustar posición desde la parte derecha
    display: "grid",
    position: "absolute",
    justifyContent: "space-between",
    display: "grid",
    gridTemplateColumns: isSmallScreen ? "1fr" : "1fr 1fr",
    margin: "5px",
    justifyContent: 'space-between'
  };

  const imageStyle: React.CSSProperties = {
    margin: '0',
    borderRadius: '10px',
    width: '40%'
  };
  const gridStyle: React.CSSProperties = {
    width: "20vw",
  };
  const gridStyleRight: React.CSSProperties = {
    marginTop: "-1vw",
    marginRight: "0",
    flexDirection: "column",
    justifyContent: "space-between",
    position: 'relative',
    width: "34vw",
  };
  const heartStyle: React.CSSProperties = {
    marginRight: '1px',
    marginTop: '1px',
    display: "flex",
    position: 'relative'
  };

  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 2 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div style={containerStyle} >
        <div style={imageContainerStyle}>
          <img src={data?.galleryImage} style={imageStyle} />
        </div>


        <div style={gridStyleRight}>
          <div
            onClick={() => navigate(`/details/${data?._id}`)}
      <div style={containerStyle}>
        <div style={gridStyle}>
          <img
            src={data?.galleryImage}
            style={imageStyle}
          />
        </div>

        <div style={gridStyleRight}>
          <div style={heartStyle}>
            <HeartButton size={25} />
          </div>
          <div
            onClick={() => navigate(`/details/${data?._id}`)}
            className="grid items-center justify-between px-3 pt-4 cursor-pointer"
          >
            <h4 className="grid justify-between text-base font-semibold">
              {data?.title}
            </h4>
          </div>

        <div>
          <ShortText text={data?.description} maxLength={60}/>
        </div>
          </div>
        
        <div style={heartStyle}>
          <HeartButton size={25} />
        </div>

        <div style={priceStyle}>
        <Button
							className='shadow-md hover:shadow-lg'
							onClick={() => navigate(`/details/activity/${data?._id}`)}
							variant='outlined'
							size='sm'
						>
							view
						</Button>
          <div className="grid justify-between text-white font-bold text-lg py-2">
            <button
              onClick={() => alert("Call to Action Aquí")}
              className="bg-GreenCooL w-full mx-6 rounded-lg py-1 hover:bg-opacity-90"
            >
              {data?.individualPrice}$
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ListingCardnew;
