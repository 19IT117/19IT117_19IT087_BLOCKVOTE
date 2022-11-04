const Verifile = artifacts.require("Verifile");
const FileHash = '0xd13efa78ef6dedeefd813fb8a4b58088f337e18c0494f662ab50a4341f213a21';
module.exports = async function(){
    const VerifileInstance = await Verifile.deployed();
    await VerifileInstance.verifyCertificate(FileHash).then(async (res)=>{
        if(res){
            console.log('Marksheet exists on Blockchain');
        }else {
            console.log("Marksheet doesn't exist on Blockchain");
        }
    });
}