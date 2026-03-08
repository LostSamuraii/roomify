import { Box } from "lucide-react";
import Button from "./ui/Button";
import { useOutletContext } from "react-router";

const Navbar = () => {
    const { isSignedIn, username, signIn , signOut } = useOutletContext<AuthContext>();
    const handleAuthClick = async () => { 
        if(isSignedIn){
            try{
                await signOut();
            }catch(e){
                console.error(`Puter Sign Out Error: ${e}`);
            }

            return;
        }

        try{
            await signIn();
        } catch(e){
            console.error(`Puter Sign In Error: ${e}`);
        }
        return;
    };

    return (
        <header className="navbar">
            <nav className="inner">
                <div className="left">
                    <div className="brand">
                        <Box className="logo" />
                        <span className="name">Roomify</span>
                    </div>
                    <ul className="links">
                        <li><a href="#">Product</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Community</a></li>
                        <li><a href="#">Enterprise</a></li>
                    </ul>
                </div>
                <div className="actions">
                    {isSignedIn ? (
                        <>
                            <span className="greeting">
                                {username ? `Hi ${username}` : 'Signed in'}
                            </span>
                            <Button size="sm" onClick={handleAuthClick}>
                                Sign out
                            </Button>
                        </>
                    ) : (
                        <>
                            <Button onClick={handleAuthClick} size="sm" variant="ghost">
                                Login
                            </Button>
                            <a href="#upload" className="btn btn--primary btn--sm">
                                Get Started
                            </a>
                        </>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Navbar;