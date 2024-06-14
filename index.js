async function getAddressByCep() {
    const cep = document.getElementById('CEP').value;

    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        if (!response.ok) {
            throw new Error('Cep mal formatado ou não encontrado');
        }
        const data = await response.json();
        console.log(data);
        document.getElementById('rua').textContent = data.logradouro;
        document.getElementById('bairro').textContent = data.bairro;
        document.getElementById('estado').textContent = data.uf;
    } catch (error) {
        alert(error.message);
    }
}

async function getPrevisao() {
    const lat = document.getElementById('latitude').value;
    const lon = document.getElementById('longitude').value;
    try {
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m`);
        
        const data = await response.json();
        console.log(data);
        const temperatures = data[0].hourly.temperature_2m;
        const currentTemperature = temperatures[0];
        document.getElementById('resposta').textContent = `Previsão de tempo de acordo com a região: ${currentTemperature}°C`;
    } catch (error) {
        alert(error.message);
    }
}



