import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { CommunitySectionWrapper } from "../styles";
import aboutIllustration from "~/assets/aboutIllustration.svg";

const CommunitySection = () => {
	return (
		<CommunitySectionWrapper container>
			<Grid container>
				<Typography variant="h2" gutterBottom className={"title"}>
					Our Community
				</Typography>
				<Grid container item xs={12} sm={6} className={"communityGrid"}>
					<div className={"communityGrid1"}>
						<Typography variant="h6" gutterBottom className="secondaryDesc">
							Amet minim mollit non deserunt ullamco est sit aliqua dolor do
							amet sint. Velit officia consequat duis enim velit mollit.
							Exercitation veniam consequat sunt nostrud amet.
						</Typography>
						<Typography variant="h6" gutterBottom className={"secondaryDesc"}>
							Amet minim mollit non deserunt ullamco est sit aliqua dolor do
							amet sint. Velit officia consequat duis enim velit mollit.
							Exercitation veniam consequat sunt nostrud amet.
						</Typography>
					</div>
				</Grid>
				<Grid container item xs={12} sm={6}>
					<div className={"communityGrid2"}>
						<Image
							src={aboutIllustration}
							placeholder="blur"
							blurDataURL="../../../assets/aboutIllustrationPlaceholder.png"
							height={400}
							width={400}
							alt="community illustration"
						/>
						{/* <Image
							id="img"
							src={"/static/illustrations/aboutIllustrationStatic.svg"}
							onLoad={e => console.log("Loaded")}
							className={"cgimage"}
							alt="Hero"
						/> */}
					</div>
				</Grid>
			</Grid>
		</CommunitySectionWrapper>
	);
};

export default CommunitySection;
