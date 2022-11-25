import { useState } from "react";
import {
	Box,
	IconButton,
	InputBase,
	Typography,
	Select,
	MenuItem,
	FormControl,
	useTheme,
	useMediaQuery
} from "@mui/material";
import {
	Search,
	Message,
	DarkMode,
	LightMode,
	Notifications,
	Menu,
	Close,
	Basket
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import  { setMode, setLogout }  from "state";
import { useNavigate } from "react-router-dom";
import FkexBetween from "../../components/FlexBetween";



const Navbar = () => {
	const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
	const dispatch  = useDispatch();
	const navigate = useNavigate();
	const user = useSelector((state) =>state.user);
	const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

	const theme = useTheme();
	const neutralLight = theme.palette.neutral.light;
	const dark = theme.palette.neutral.dark;
	const background = theme.palette.background.default;
	




	return <div>navbar</div>;
};
export default Navbar;