
import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function DeleteModal({deleteAllProducts, allproducts}) {

  const [open, setOpen] = useState(false);
  const [securityWord, setsecurityWord] = useState('')

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div>
      <Button fullWidth
       variant="contained" 
       color="secondary" 
       disabled = {allproducts.length === 0}
       onClick={handleClickOpen}>
        Eliminar todo
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">¿Seguro que quieres eliminar todo?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Por favor confirma que quieres eliminar todos los elementos de tu lista, escribe la palabra CONFIRMAR para empezar tu lista de nuevo
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Aqui escribe la palabra de seguridad"
            type="text"
            fullWidth
            onChange={(word) => setsecurityWord(word.target.value )}
          />
        </DialogContent>
        <DialogActions>
          <Button
           onClick={handleClose} color="secondary">
            Cancelar
          </Button>
          <Button
            disabled = {securityWord !== "CONFIRMAR"} 
            onClick={()=>{
              deleteAllProducts()
              handleClose()
            }} color="secondary">
            Acceptar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}