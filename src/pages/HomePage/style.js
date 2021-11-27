import heroIllustration from "../../assets/illustrations/hero-section.svg";
export default function styles(theme) {
  return {
    section: {
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 120,
    },
    title: {
      display: "block",
      width: "100%",
      textAlign: "center",

      ...theme.palette.text.gradient
    },
    subtitle: {
      display: "block",
      width: "100%",
      textAlign: "center",
      ...theme.palette.text.gradient,
    },
    description: {
      margin: "auto",
      display: "block",
      width: "80%",
      textAlign: "center",

      color: theme.palette.text.primary,
    },
    secondaryDesc: {
      color: theme.palette.text.secondary,
      width: "100%",
    },
    textAlignLeft: {
      margin: 0,
      marginBottom: 24,
      textAlign: "left",
      // [theme.breakpoints.down("sm")]: {
      //   textAlign: "center",
      // },
    },
    heroSection: {
      height: "65vh",
      background: `url(${heroIllustration}) no-repeat center`,
      backgroundSize: "contain",
    },
    heroSectionContent: {
      width: "100%",
    },
    heroBtns: {
      display: "flex",
      width: "100%",
      justifyContent: "center",
      gap: 40,
      marginTop: 54,
      [theme.breakpoints.down("sm")]: {
         gap: 18,
      },
      flexWrap:"wrap"
    },
    categoriesSection: {
      // [theme.breakpoints.down("sm")]: {
      //   display: "flex",
      // },
    },
    categoriesIllustration: {
      marginLeft: "auto",
      width: "100%",
    },
    video: {
      width: "100%",
      [theme.breakpoints.down("sm")]: {
        height: 300,
        // display: "flex",
      },
    },
    videoDesc: {
      marginTop: 40,
    },
    journeySection: {
      backgroundColor: 'hsla(218, 20%, 16%, 0.5)',
      borderRadius: '20px',
      padding: '50px',
      position: 'relative',
      [theme.breakpoints.down("sm")]: {
        padding: '30px 20px 30px 20px',
      }
    },
    journeyTextSection: {
      position: 'absolute',
      width: '60%',
      alignItems: "center",
      justifyContent: "center",
      [theme.breakpoints.down("sm")]: {
        position: 'relative',
        width: '100%',
      }
    }, 
    textCenter: {
      textAlign: 'center',
    },
    greenText: {
      color: '#2DFFD9',
    },
    journeyImageSection: {
      height: '100%',
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between'
    },
    imgSmall: {
      height: '80px',
      width: '80px',
      objectFit: 'cover',
      objectPosition: 'center',
      borderRadius: '9999px',
      [theme.breakpoints.down("sm")]: {
        display: 'none'
      }
    },
    imgMedium: {
      height: '100px',
      width: '100px',
      objectFit: 'cover',
      objectPosition: 'center',
      borderRadius: '9999px',
      [theme.breakpoints.down("sm")]: {
        display: 'none'
      }
    },
    imgBig: {
      height: '130px',
      width: '130px',
      objectFit: 'cover',
      objectPosition: 'center',
      borderRadius: '9999px',
      [theme.breakpoints.down("sm")]: {
        display: 'none'
      }
    },
    imgContainer: {
      width: '30%',
      display: 'grid',
      gridTemplateRows: 'repeat(3, minmax(0, 1fr))',
    },
    imgLeft: {
      display: 'flex',
      justifyContent: 'flex-start',
    },
    imgRight: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
    imgCenter: {
      display: 'flex',
      justifyContent: 'center',
    },
  };
}
