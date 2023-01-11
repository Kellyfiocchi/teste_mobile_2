pipeline{
    agent any
    
    stages{
        stage('Clonar o repositório'){
            steps{
                git branch: 'main', url: 'https://github.com/Kellyfiocchi/teste_mobile_2'
            }
        }
        
        stage('Instalar dependências') {
            steps {
               bat 'npm install' 
            }
        }

        stage('Iniciar testes') {
            steps {
                bat 'npm test'
            }
        }
    }
}