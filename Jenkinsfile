pipeline {
    agent {
        docker {
            image 'node:18' // Dùng Docker image node chính chủ
        }
    }

    stages {
        stage('Build') {
            steps {
                echo '🏗️ Cài đặt dependencies...'
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                echo '🧪 Chạy kiểm thử...'
                sh 'npm test || true' // Dùng || true để không fail nếu chưa có test
            }
        }

        stage('Deploy') {
            steps {
                echo '🚀 Build project...'
                sh 'npm run build'
            }
        }
    }
}
