pipeline {
    agent any

    parameters {
        choice(
            name: 'ENVIRONMENT',
            choices: ['QA', 'DEV', 'STAGING'],
            description: 'Environment to run tests against'
        )
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/omontielc/automation-framework-playwright_typescript.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                bat 'npx playwright install --with-deps'
            }
        }

        stage('Test') {
            steps {
                script {
                    try {
                        bat 'npm run test:ui'
                        bat 'npm run test:api'
                    } catch (err) {
                        currentBuild.result = 'UNSTABLE'
                    }
                }
            }
            post {
                always {
                    // Genera y publica el reporte de Allure en Jenkins
                    allure([
                        includeProperties: false,
                        results: [[path: 'allure-results']]
                    ])
                }
            }
        }
    }

    post {
        always {
            echo "Pipeline finished — Environment: ${params.ENVIRONMENT}"
        }
        success {
            echo 'All Playwright tests passed'
        }
        failure {
            echo 'Playwright execution failed — check Allure report'
        }
    }
}