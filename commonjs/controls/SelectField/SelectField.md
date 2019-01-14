### Forms

```jsx
initialState = {
    value: '',
};
const onChange = (event) => { setState({ value: event.target.value }); };
<div>
    <Grid>
        <GridItem size={{xs:12, sm:6 }}>
            <div style={{backgroundColor:'red', width:'100%', height: '1px'}} />
            <SelectField fullwidth options={[{label: "hey", value: "1"}]} label="select" />
            <div style={{backgroundColor:'red', width:'100%', height: '1px'}} />
        </GridItem>
        <GridItem size={{xs: 12, sm:6}}>
            <div style={{backgroundColor:'red', width:'100%', height: '1px'}} />
            <TextField value={state.value} onChange={onChange} label="textfield" floating />
            <div style={{backgroundColor:'red', width:'100%', height: '1px'}} />
        </GridItem>
    </Grid>
</div>
```

```jsx
initialState = {
    value: '',
};
const onChange = (event) => { setState({ value: event.target.value }); };
<div>
    <Grid>
        <GridItem size={{xs:12, sm:6 }}>
            <div style={{backgroundColor:'red', width:'100%', height: '1px'}} />
            <SelectField errorMessage="Error" fullwidth options={[{label: "hey", value: "1"}]} label="select" />
            <div style={{backgroundColor:'red', width:'100%', height: '1px'}} />
        </GridItem>
        <GridItem size={{xs: 12, sm:6}}>
            <div style={{backgroundColor:'red', width:'100%', height: '1px'}} />
            <TextField errorMessage="Error" value={state.value} onChange={onChange} label="textfield" floating />
            <div style={{backgroundColor:'red', width:'100%', height: '1px'}} />
        </GridItem>
    </Grid>
</div>
```