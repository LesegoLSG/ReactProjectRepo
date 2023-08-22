import Button from './Button';

//To be used in future
const Header = ({onAdd, showAdd}) =>{
    return (
        <Header >
            {showAdd && (
                <Button text={showAdd ? 'Add Member' : 'back'} onClick={onAdd} />
            )}
        </Header>
    )
}

export default Header;