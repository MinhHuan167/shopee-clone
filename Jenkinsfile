pipeline {
    agent {
        docker {
            image 'node:18'
        }
    }

    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying application...'
                // Thêm lệnh deploy thực tế nếu cần
            }
        }
    }
}
